import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import { useDeleteClient } from "../../hooks/useDeleteClient";
import ButtonSpiner from "../../components/UI/ButtonSpinner";
import { useModalFocus } from "../../hooks/useModalFocus";

const ConfirmDeleteModal = ({
  isDeleted,
  isOpen,
  onClose,
  clientId,
  clientName,
  onSuccess,
}) => {
  const { deleteClient, resetError, loading, error } = useDeleteClient();
  const modalRef = useRef(null);
  useModalFocus({ isOpen, modalRef });

  useEffect(() => {
    if (!isOpen) {
      resetError();
    }
  }, [isOpen, resetError]);

  // Outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (loading) return;
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, loading, onClose]);

  // ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape" && !loading) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, loading, onClose]);

  if (!isOpen) return null;

  if (isDeleted) return null;

  const handleConfirm = async () => {
    const success = await deleteClient(clientId);
    if (success) onSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-delete-title"
        aria-describedby="confirm-delete-description"
        className="w-full max-w-md rounded-xl border border-white/5 bg-gray-darker/95 p-7 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 border-b border-gray-dark pb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red/10 border border-red/20">
            <span className="text-red text-lg" aria-hidden="true">
              ⚠️
            </span>
          </div>
          <h2
            className="text-lg font-semibold text-white"
            id="confirm-delete-title"
          >
            Excluir cliente
          </h2>
        </div>

        {/* Description */}
        <p
          className="text-sm text-gray-medium mb-5 leading-relaxed"
          id="confirm-delete-description"
        >
          Tem certeza que deseja excluir{" "}
          <span className="font-medium text-white bg-white/5 px-1.5 py-0.5 rounded">
            {clientName}
          </span>
          ?
          <br />
          <br />O cliente será desativado e não aparecerá mais nas listagens
          ativas.
        </p>

        {/* Error */}
        {error && (
          <p className="text-red text-sm mb-4" role="alert">
            {error}
          </p>
        )}

        {/* Actions */}
        <div className="flex justify-end gap-3 border-t border-gray-dark pt-4">
          <button
            onClick={onClose}
            disabled={loading}
            type="button"
            className="px-4 py-2 rounded-md text-gray-light hover:bg-white/5 transition disabled:opacity-50 cursor-pointer"
          >
            Cancelar
          </button>

          <button
            onClick={handleConfirm}
            disabled={loading}
            type="button"
            className="px-4 py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-500 active:scale-[0.98] transition disabled:opacity-50 cursor-pointer"
          >
            {loading ? <ButtonSpiner color="white" /> : "Excluir"}
          </button>
        </div>
      </div>
    </div>
  );
};

ConfirmDeleteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  clientId: PropTypes.number.isRequired,
  clientName: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
  isDeleted: PropTypes.bool.isRequired,
};

export default ConfirmDeleteModal;
