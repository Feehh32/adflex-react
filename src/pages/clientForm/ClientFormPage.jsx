import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../../components/UI/Spinner";
import ErrorScreen from "../../components/UI/ErrorScreen";
import ClientForm from "./ClientForm.jsx";
import { useClientById } from "../../hooks/useClientById";
import { usePageMetadata } from "../../hooks/usePageMetadata";

const ClientFormPage = () => {
  const { clientId } = useParams();
  const { client, loading, error, refetch } = useClientById(clientId);
  const [pageLoading, setPageLoading] = useState(true);
  const isEditMode = Boolean(clientId);

  usePageMetadata({ title: isEditMode ? "Editar cliente" : "Novo cliente" });

  // Emulates a loading screen for UX purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (pageLoading || (clientId && loading)) {
    return <Spinner title="Carregando página..." />;
  }
  if (error) return <ErrorScreen error={error} onRetry={refetch} />;

  return <ClientForm client={client} isEditMode={isEditMode} />;
};

export default ClientFormPage;
