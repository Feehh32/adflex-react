import AddClientNameIcon from "../../assets/icons/add-client-name.svg?react";

const ClientNameSelect = ({ error, clients, clientIdFromUrl, register }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="clientName"
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
        <AddClientNameIcon className="w-6 h-6 absolute left-3 opacity-50" />
        <select
          {...register("client_id")}
          id="clientName"
          autoComplete="off"
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
        <span className="text-xs text-red">
          {error.message || "Preencha o campo corretamente"}
        </span>
      )}
    </div>
  );
};

export default ClientNameSelect;
