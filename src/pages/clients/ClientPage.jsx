import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Spinner from "../../components/UI/Spinner";
import ClientOverview from "./ClientOverview";
import ClientMetrics from "./ClientMetrics";
import OsArea from "./OsArea";
import { useClientPageData } from "../../hooks/useClientPageData";
import useDebounce from "../../hooks/useDebounce";
import ClientDeleteModal from "./ConfirmDeleteModal";

const ClientPage = () => {
  const { clientId } = useParams();
  const [search, setSearch] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenDeleteModal = () => setIsDeleteModalOpen(true);
  const handleCloseDeleteModal = () => setIsDeleteModalOpen(false);
  const handleDeleteSuccess = () => navigate("/");

  const debounceSearch = useDebounce(search, 500);
  const {
    client,
    metrics,
    orders,
    pagination,
    loading,
    nextPage,
    prevPage,
    isSearching,
  } = useClientPageData(clientId, debounceSearch);

  const isDeleted = !!client?.deleted_at;

  if (loading) return <Spinner title="Carregando a página do cliente" />;

  return (
    <>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl md:text-[32px] font-secondary font-bold mb-2">
            {client?.name}
            <span className="text-prim1" aria-hidden="true">
              .
            </span>
            {isDeleted && (
              <span className="text-red text-[16px]"> (Desativado)</span>
            )}
          </h1>
          <ClientOverview client={client} isDeleted={isDeleted} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          <OsArea
            orders={orders}
            nextPage={nextPage}
            prevPage={prevPage}
            pagination={pagination}
            isSearching={isSearching}
            search={search}
            setSearch={setSearch}
            isDeleted={isDeleted}
          />
          <ClientMetrics
            metrics={metrics}
            onDeleteClick={handleOpenDeleteModal}
            isDeleted={isDeleted}
          />
        </div>
        <ClientDeleteModal
          isDeleted={isDeleted}
          isOpen={isDeleteModalOpen}
          onClose={handleCloseDeleteModal}
          clientId={clientId}
          clientName={client?.name}
          onSuccess={handleDeleteSuccess}
        />
      </div>
    </>
  );
};

export default ClientPage;
