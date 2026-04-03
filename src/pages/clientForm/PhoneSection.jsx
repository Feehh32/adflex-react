import PropTypes from "prop-types";
import PhoneIcon from "../../assets/icons/tel-gold-icon.svg?react";
import PhoneIconGray from "../../assets/icons/tel-secondary-icon.svg?react";
import PhoneIconGrayPrimary from "../../assets/icons/tel-primary-icon.svg?react";
import InputField from "../../components/UI/InputField";

const PhoneSection = ({ formData, handleChange }) => {
  return (
    <section
      className="flex flex-col gap-4 bg-gray-darker p-4 rounded-lg shadow-lg border border-gray-dark"
      aria-labelledby="phone-section-title"
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-lg border border-prim2/50 bg-gray-input inline-block">
          <PhoneIcon className="w-6 h-6" />
        </div>
        <div>
          <h2
            className="text-lg md:text-xl text-light-gray font-secondary font-bold"
            id="phone-section-title"
          >
            Contatos - Telefones
          </h2>
          <span className="text-sm text-gray-medium">
            Informações de contato do cliente.
          </span>
        </div>
      </div>

      <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <legend className="sr-only">Telefones do cliente</legend>

        <InputField
          label="Telefone Principal"
          name="phone_primary"
          id="phone_primary"
          type="tel"
          required
          placeholder="(11) 98888-8888"
          Icon={PhoneIconGrayPrimary}
          width="w-full"
          value={formData.phone_primary}
          onChange={handleChange}
        />

        <InputField
          label="Telefone Secundário"
          name="phone_secondary"
          id="phone_secondary"
          type="tel"
          placeholder="(11) 98888-8888 (Opcional)"
          Icon={PhoneIconGray}
          width="w-full"
          value={formData.phone_secondary}
          onChange={handleChange}
        />
      </fieldset>
    </section>
  );
};

PhoneSection.propTypes = {
  formData: PropTypes.shape({
    email_primary: PropTypes.string,
    email_secondary: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PhoneSection;
