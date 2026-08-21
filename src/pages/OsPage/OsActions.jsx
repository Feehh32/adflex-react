import PropTypes from "prop-types";
import DeleteIcon from "../../assets/icons/delete-icon.svg?react";
import Edit from "../../assets/icons/edit.svg?react";
import PrintIcon from "../../assets/icons/print-icon.svg?react";

const OsActions = ({ onDelete, onEdit }) => {
  const handlePrint = async () => {
    if (window.electronAPI?.isElectron) {
      await window.electronAPI.printPreview();
      return;
    }

    window.print();
  };

  return (
    <section
      className="flex flex-col gap-4 text-xs p-4 bg-gray-darker rounded-lg shadow-lg border border-gray-dark text-light-gray "
      aria-labelledby="osSidebar-actions-title"
    >
      <div className="flex flex-col gap-4">
        <h2
          className="font-semibold text-lg font-secondary text-left"
          id="osSidebar-actions-title"
        >
          Ações
        </h2>
        <hr className="-mx-4 border-t border-gray-dark" />
      </div>
      <div className="flex flex-col gap-2 w-full text-[16px]">
        <button
          type="button"
          onClick={handlePrint}
          className="focus-visible bg-prim2 rounded-md px-4 py-2 hover:brightness-110 transition duration-300 ease-in-out w-full flex items-center justify-center
          md:justify-start gap-2 cursor-pointer font-semibold"
        >
          <PrintIcon aria-hidden="true" focusable="false" className="w-5 h-5" />
          <span>Imprimir</span>
        </button>
        <button
          type="button"
          onClick={onEdit}
          className="focus-visible border-2 text-gray-medium border-gray-dark rounded-md px-4 py-2 hover:bg-gray-dark hover:text-light-gray transition duration-300 ease-in-out w-full flex items-center justify-center md:justify-start gap-2 cursor-pointer font-semibold"
        >
          <Edit aria-hidden="true" focusable="false" className="w-4 h-4" />
          <span>Editar Data</span>
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="focus-visible w-full flex items-center justify-center md:justify-start gap-2 px-4 py-2 rounded-md border-2 border-red text-red transition duration-300 ease-in-out hover:text-white  hover:bg-red cursor-pointer font-semibold"
        >
          <DeleteIcon
            aria-hidden="true"
            focusable="false"
            className="w-4 h-4"
          />
          <span>Excluir O.S</span>
        </button>
      </div>
    </section>
  );
};

OsActions.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default OsActions;
