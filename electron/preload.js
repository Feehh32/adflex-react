import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  getAppVersion: () => ipcRenderer.invoke("app:get-version"),
  printPreview: () => ipcRenderer.invoke("print:preview"),
  isElectron: true,
});
