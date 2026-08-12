import PropTypes from "prop-types";
import AddClientNameIcon from "../../assets/icons/add-client-name.svg?react";

const ClientNameSelect = ({ error, clients, clientIdFromUrl, register }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="service-order-client-id"
        className={`text-sm font-medium flex gap-2 ${
          error.client_id && "text-red"
        }`}
      >
        Cliente
        <span className="text-prim1">*</span>
      </label>
      <div
        className={`relative flex items-center w-full md:w-full focus-within:ring-2 focus-within:ring-prim1 rounded-lg border ${
          error.client_id ? "border-red" : "border-gray-dark"
        }  shadow-lg`}
      >
        <AddClientNameIcon
          className="w-6 h-6 absolute left-3 opacity-50"
          aria-hidden="true"
          focusable="false"
        />
        <select
          {...register("client_id", { valueAsNumber: true })}
          id="service-order-client-id"
          autoComplete="off"
          aria-invalid={!!error.client_id}
          aria-describedby={error.client_id ? "client-id-error" : undefined}
          disabled={Boolean(clientIdFromUrl)}
          className={`w-full bg-gray-input rounded-lg py-2 px-4 text-text-primary placeholder:text-gray-medium focus:outline-none transition pl-10 ${
            clientIdFromUrl ? "opacity-30 pointer-events-none" : ""
          }`}
        >
          <option value="" disabled>
            Selecione um cliente
          </option>
          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.name}
            </option>
          ))}
        </select>
      </div>
      {error.client_id && (
        <span className="text-xs text-red" id="client-id-error">
          {error.client_id.message || "Preencha o campo corretamente"}
        </span>
      )}
    </div>
  );
};

ClientNameSelect.propTypes = {
  error: PropTypes.object.isRequired,
  clients: PropTypes.array.isRequired,
  clientIdFromUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  register: PropTypes.func.isRequired,
};

export default ClientNameSelect;
