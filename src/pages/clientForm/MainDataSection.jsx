import PropTypes from "prop-types";
import UserIcon from "../../assets/icons/user-icon.svg?react";
import UserIconGray from "../../assets/icons/user-icon-gray.svg?react";
import InputField from "../../components/UI/InputField";

const MainDataSection = ({ register, errors }) => {
  return (
    <section
      as="section"
      className="flex flex-col gap-4 bg-gray-darker p-4 rounded-lg shadow-lg border border-gray-dark"
      aria-labelledby="main-data-section-clientform-title"
    >
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-lg border border-prim2/50 bg-gray-input inline-block">
          <UserIcon aria-hidden="true" className="w-6 h-6" />
        </div>
        <div>
          <h2
            className="text-lg md:text-xl text-light-gray font-secondary font-bold"
            id="main-data-section-clientform-title"
          >
            Dados Principais
          </h2>
          <span className="text-sm text-gray-medium">
            Informações básicas do cliente.
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <InputField
          label="Nome"
          name="name"
          id="name"
          autoComplete="name"
          required
          placeholder="Digite o nome do cliente"
          Icon={UserIconGray}
          width="w-1/2"
          register={register}
          error={errors.name}
        />
      </div>
    </section>
  );
};

MainDataSection.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default MainDataSection;
