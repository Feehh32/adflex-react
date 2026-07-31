const FormHeader = () => {
  return (
    <header className="flex flex-col gap-1">
      <h1 className="text-2xl md:text-[32px] font-secondary font-bold">
        Nova O.S
        <span className="text-prim1" aria-hidden="true">
          .
        </span>
      </h1>
      <p className="text-sm text-gray-medium">
        Preencha as informações abaixo para cadastrar uma nova ordem de serviço.
      </p>
    </header>
  );
};

export default FormHeader;
