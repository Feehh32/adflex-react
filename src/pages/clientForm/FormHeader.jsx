const FormHeader = () => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl md:text-[32px] font-secondary font-bold">
        Novo Cliente
        <span className="text-prim1" aria-hidden="true">
          .
        </span>
      </h1>
      <p className="text-sm text-gray-medium">
        Preencha as informações abaixo para cadastrar um novo cliente.
      </p>
    </div>
  );
};

export default FormHeader;
