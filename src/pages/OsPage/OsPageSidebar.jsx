import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  updateDateOs,
  deleteOs,
} from "../../services/service_order_page.service";
import { toast } from "react-hot-toast";
import OsActions from "./OsActions";
import OsInfo from "./OsInfo";
import OsSummary from "./OsSummary";
import BaseModal from "../../components/UI/BaseModal";
import InputField from "../../components/UI/InputField";
import ButtonSpinner from "../../components/UI/ButtonSpinner";

const OsPageSidebar = ({ serviceOrder, refreshServiceOrder }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isSavingDate, setIsSavingDate] = useState(false);
  const [docDate, setDocDate] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!serviceOrder?.document_date) return;

    setDocDate(serviceOrder.document_date.split("T")[0]);
  }, [serviceOrder]);

  const handleUpdateDate = async () => {
    try {
      setIsSavingDate(true);
      const isoDate = `${docDate}T12:00:00`;
      await updateDateOs(serviceOrder.id, isoDate);

      toast.success("Data atualizada com sucesso");
      await refreshServiceOrder();

      setIsEditOpen(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSavingDate(false);
    }
  };

  const handleDeleteServiceOrder = async () => {
    try {
      setIsDeleting(true);
      await deleteOs(serviceOrder.id);

      toast.success("Ordem de serviço excluida com sucesso");
      setIsDeleteOpen(false);
      navigate(`/clients/${serviceOrder.client.id}`, { replace: true });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsDeleteOpen(false);
    }
  };

  return (
    <>
      <aside className="md:w-full flex flex-col gap-2 print:hidden shrink-0">
        <OsActions
          onDelete={() => setIsDeleteOpen(true)}
          onEdit={() => setIsEditOpen(true)}
        />
        <OsSummary
          total={serviceOrder.total}
          services={serviceOrder.services}
        />
        <OsInfo />
      </aside>
      <BaseModal
        title={`Excluir O.S ${serviceOrder.code}?`}
        description={`Tem certeza que deseja excluir a O.S ${serviceOrder.code}?`}
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        footer={
          <div className="flex gap-2 w-full justify-end">
            <button
              type="button"
              className="focus-visible border-2 text-gray-medium border-gray-dark rounded-md px-4 py-2 hover:bg-gray-dark hover:text-light-gray transition duration-300 ease-in-out cursor-pointer font-semibold"
              onClick={() => setIsDeleteOpen(false)}
            >
              Cancelar
            </button>
            <button
              onClick={handleDeleteServiceOrder}
              disabled={isDeleting}
              type="button"
              className="focus-visible px-4 py-2 rounded-md border-2 border-red text-red transition duration-300 ease-in-out hover:text-white  hover:bg-red cursor-pointer font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDeleting ? <ButtonSpinner color="text-primary" /> : "Excluir"}
            </button>
          </div>
        }
      >
        <div>
          <p className="text-sm text-light-gray">
            Essa ação é irreversível. Depois de excluida, a O.S não pode ser
            recuperada!
          </p>
        </div>
      </BaseModal>
      <BaseModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        title="Editar data da O.S"
        description="Insira uma data válida no campo abaixo:"
        size="lg"
        footer={
          <div className="flex gap-2 w-full justify-end">
            <button
              type="button"
              className="focus-visible border-2 text-gray-medium border-gray-dark rounded-md px-4 py-2 hover:bg-gray-dark hover:text-light-gray transition duration-300 ease-in-out cursor-pointer font-semibold "
              onClick={() => setIsEditOpen(false)}
            >
              Cancelar
            </button>
            <button
              type="button"
              disabled={!docDate || isSavingDate}
              onClick={handleUpdateDate}
              className="focus-visible px-4 py-2 rounded-lg bg-prim2 cursor-pointer text-gray-darker font-medium hover:opacity-90 transition min-w-25 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSavingDate ? <ButtonSpinner /> : "Salvar"}
            </button>
          </div>
        }
      >
        <div>
          <InputField
            type="date"
            label="Data da O.S"
            width="w-full"
            value={docDate}
            onChange={(e) => setDocDate(e.target.value)}
          />
        </div>
      </BaseModal>
    </>
  );
};

export default OsPageSidebar;
