import { useEffect } from "react";
import TrashIcon from "../../assets/icons/trash.svg?react";
import InputField from "../../components/UI/InputField";

const ServiceItem = ({
  index,
  onRemove,
  canRemove,
  watch,
  register,
  setValue,
  thicknessOptions,
  errors,
}) => {
  const selectedThickness = watch(`services.${index}.thickness_id`);
  const serviceErrors = errors?.services?.[index] || {};

  useEffect(() => {
    if (thicknessOptions.length > 0 && !selectedThickness) {
      setValue(`services.${index}.thickness_id`, thicknessOptions[2]?.id);
    }
  }, [thicknessOptions, selectedThickness]);

  return (
    <div className=" gap-4 p-4 border border-gray-dark rounded-lg transition-all duration-200 ease-in-out">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Serviço {index + 1}</h3>
        {canRemove && onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className=" bg-gray-input border border-gray-dark text-sm p-1 rounded-md hover:opacity-70 hover:text-gray-darker transition duration-300 ease-in-out cursor-pointer"
          >
            <TrashIcon aria-hidden="true" className="w-4 h-4" />
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[320px_2fr_2fr_2fr] gap-4">
        <InputField
          label="Nome do serviço"
          placeholder="Digite o nome do serviço"
          name={`services.${index}.service_name`}
          register={register}
          type="text"
          required
          id={`service_name-${index}`}
          autoComplete="name"
          error={serviceErrors.service_name}
        />
        <InputField
          label="Largura"
          placeholder="Digite a largura"
          name={`services.${index}.width`}
          register={register}
          type="text"
          required
          id={`width-${index}`}
          autoComplete="off"
          error={serviceErrors.width}
        />
        <InputField
          label="Altura"
          placeholder="Digite a altura"
          name={`services.${index}.height`}
          register={register}
          type="text"
          required
          id={`height-${index}`}
          autoComplete="off"
          error={serviceErrors.height}
        />
        <InputField
          label="Quantidade"
          placeholder="Em números"
          name={`services.${index}.amount`}
          register={register}
          type="text"
          required
          id={`amount-${index}`}
          autoComplete="off"
          error={serviceErrors.amount}
        />
        <div className="flex gap-2 items-end md:col-span-4">
          <InputField
            label={"Valor de orçamento"}
            placeholder="Digite o valor do orçamento"
            name={`services.${index}.budget_value`}
            register={register}
            type="text"
            id={`budget_value-${index}`}
            autoComplete="off"
            error={serviceErrors.budget_value}
          />
          <span className="text-[12px] text-gray-medium w-40">
            Preencher apenas se houver valor de orçamento
          </span>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap mt-4">
        <label className="text-sm font-medium flex gap-2 w-full">
          Espessura <span className="text-prim1">*</span>
        </label>
        {thicknessOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => {
              setValue(`services.${index}.thickness_id`, option.id, {
                shouldValidate: true,
              });
            }}
            className={`
              focus-visible px-3 py-1 rounded-md border transition cursor-pointer
              ${
                selectedThickness === option.id
                  ? "bg-prim1 text-white border-prim1 shadow-sm"
                  : "bg-gray-input border-gray-dark hover:border-prim1"
              }
            `}
          >
            {option.label} mm
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceItem;
