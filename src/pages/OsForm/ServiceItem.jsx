import { useEffect } from "react";
import PropTypes from "prop-types";
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
  }, [index, selectedThickness, setValue, thicknessOptions]);

  return (
    <div className="p-4 border border-gray-dark rounded-lg transition-all duration-200 ease-in-out">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Serviço {index + 1}</h3>
        {canRemove && onRemove && (
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remover serviço ${index + 1}`}
            className=" bg-gray-input border border-gray-dark text-sm p-1 rounded-md hover:opacity-70 hover:text-gray-darker transition duration-300 ease-in-out cursor-pointer"
          >
            <TrashIcon
              fill="#6a7282"
              aria-hidden="true"
              focusable="false"
              className="w-4 h-4"
            />
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
          width="w-full"
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
          width="w-full"
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
          width="w-full"
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
          width="w-full"
          id={`amount-${index}`}
          autoComplete="off"
          error={serviceErrors.amount}
        />
        <div className="flex gap-2 items-end md:col-span-4">
          <InputField
            label="Valor de orçamento"
            placeholder="Digite o valor do orçamento"
            name={`services.${index}.budget_value`}
            register={register}
            type="text"
            id={`budget_value-${index}`}
            width="w-full"
            autoComplete="off"
            error={serviceErrors.budget_value}
          />
          <span className="text-[12px] text-gray-medium w-40">
            Preencher apenas se houver valor de orçamento
          </span>
        </div>
      </div>
      <fieldset className="flex gap-2 flex-wrap mt-4">
        <legend className="text-sm font-medium mb-2">
          Espessura
          <span className="text-prim1">*</span>
        </legend>
        {thicknessOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            aria-pressed={selectedThickness === option.id}
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
      </fieldset>
    </div>
  );
};

ServiceItem.propTypes = {
  index: PropTypes.number.isRequired,
  onRemove: PropTypes.func,
  canRemove: PropTypes.bool,
  watch: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  thicknessOptions: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired,
};

export default ServiceItem;
