import PropTypes from "prop-types";
import ChargeIcon from "../../assets/icons/charge-icon.svg?react";
import ChargeIconGray from "../../assets/icons/charge-gray-icon.svg?react";
import InputField from "../../components/UI/InputField";

const ChargeSection = ({ register, errors }) => {
  return (
    <section
      className="flex flex-col gap-4 bg-gray-darker p-4 rounded-lg shadow-lg border border-gray-dark"
      aria-labelledby="charge-section-title "
    >
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-lg border border-prim2/50 bg-gray-input inline-block">
          <ChargeIcon className="w-6 h-6" />
        </div>
        <div>
          <h2
            className="text-lg md:text-xl text-light-gray font-secondary font-bold"
            id="charge-section-title"
          >
            Cobrança
          </h2>
          <span className="text-sm text-gray-medium">
            Valor padrão cobrado do cliente.
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <InputField
          label="Cobrança"
          name="charge"
          id="charge"
          type="text"
          autoComplete="off"
          required
          placeholder="Digite o valor da cobrança"
          Icon={ChargeIconGray}
          register={register}
          error={errors.charge}
        />
      </div>
    </section>
  );
};

ChargeSection.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default ChargeSection;
