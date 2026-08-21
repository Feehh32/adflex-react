import { app, BrowserWindow, ipcMain } from "electron";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pathToFileURL } from "node:url";
import { writeFile, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProductionTest = process.env.ELECTRON_PROD === "true";

ipcMain.handle("app:get-version", () => {
  return app.getVersion();
});

let previewWindow = null;
let previewTempDir = null;

ipcMain.handle("print:preview", async (event) => {
  const sourceWindow = BrowserWindow.fromWebContents(event.sender);
  if (!sourceWindow) return false;

  try {
    const pdfBuffer = await sourceWindow.webContents.printToPDF({
      printBackground: true,
      pageSize: "A4",
      margins: { marginType: "default" },
    });

    previewTempDir = await mkdtemp(join(tmpdir(), "print-preview-"));
    const pdfPath = join(previewTempDir, "preview.pdf");
    await writeFile(pdfPath, pdfBuffer);

    if (previewWindow && !previewWindow.isDestroyed()) {
      previewWindow.focus();
    } else {
      previewWindow = new BrowserWindow({
        width: 1100,
        height: 800,
        title: "Pré-visualização de impressão",
        autoHideMenuBar: true,
        webPreferences: {
          contextIsolation: true,
          nodeIntegration: false,
          plugins: true,
        },
      });

      previewWindow.on("closed", async () => {
        previewWindow = null;

        if (previewTempDir) {
          await rm(previewTempDir, {
            recursive: true,
            force: true,
          });

          previewTempDir = null;
        }
      });
    }

    previewWindow.webContents.on("did-fail-load", (e, code, desc) => {
      console.error("Falha ao carregar preview:", code, desc);
    });

    await previewWindow.loadURL(pathToFileURL(pdfPath).toString());

    return true;
  } catch (error) {
    console.error("Erro ao gerar pré-visualização", error);
    return false;
  }
});

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 700,
    icon: join(__dirname, "../build/favicon.ico"),

    webPreferences: {
      preload: app.isPackaged
        ? join(__dirname, "../preload/preload.cjs")
        : join(process.cwd(), "out/preload/preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (app.isPackaged) {
    mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
  } else if (isProductionTest) {
    mainWindow.loadFile(join(process.cwd(), "out/renderer/index.html"));
  } else {
    mainWindow.loadURL("http://localhost:5173");
  }
};

app.whenReady().then(() => {
  createWindow();
});
