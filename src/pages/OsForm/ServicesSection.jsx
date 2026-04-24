import ListServiceIcon from "../../assets/icons/list-service-icon.svg?react";
import ServiceItem from "./ServiceItem";

const ServicesSection = ({
  fields,
  append,
  remove,
  watch,
  register,
  setValue,
  thicknessOptions,
  errors,
}) => {
  return (
    <section
      className="flex flex-col gap-4 bg-gray-darker p-4 rounded-lg shadow-lg border border-gray-dark"
      aria-labelledby="services-section-title"
    >
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-lg border border-prim2/50 bg-gray-input inline-block">
          <ListServiceIcon aria-hidden="true" className="w-6 h-6" />
        </div>
        <div>
          <h2
            className="text-lg md:text-xl text-light-gray font-secondary font-bold"
            id="services-section-title"
          >
            Serviços
          </h2>
          <span className="text-sm text-gray-medium">
            Lista de serviços incluídos na ordem de serviço (O.S).
          </span>
        </div>
      </div>
      {fields.map((field, index) => {
        return (
          <ServiceItem
            key={field.id}
            index={index}
            onRemove={() => remove(index)}
            canRemove={fields.length > 1}
            watch={watch}
            register={register}
            setValue={setValue}
            thicknessOptions={thicknessOptions}
            errors={errors}
          />
        );
      })}
      <button
        type="button"
        onClick={() =>
          append({
            service_name: "",
            width: "",
            height: "",
            amount: "",
            thickness_id: null,
          })
        }
        className="flex items-center gap-2 border-2 border-prim2 py-2 px-4 rounded-md text-lg font-semibold text-prim2 hover:bg-prim2 hover:text-white transition duration-300 ease-in-out cursor-pointer"
      >
        <span className="text-xl leading-none">+</span> Adicionar serviço
      </button>
    </section>
  );
};

export default ServicesSection;
