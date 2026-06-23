import OsForm from "./OsForm";
import { usePageMetadata } from "../../hooks/usePageMetadata";

const OsFormPage = () => {
  usePageMetadata({ title: "Criar O.S" });
  return <OsForm />;
};

export default OsFormPage;
