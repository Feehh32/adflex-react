import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { formatPhone, unformatPhone } from "../../utils/formatPhone";
import PhoneIcon from "../../assets/icons/tel-gold-icon.svg?react";
import PhoneIconGray from "../../assets/icons/tel-secondary-icon.svg?react";
import PhoneIconGrayPrimary from "../../assets/icons/tel-primary-icon.svg?react";
import InputField from "../../components/UI/InputField";

const PhoneSection = ({ control, errors }) => {
  return (
    <section
      className="flex flex-col gap-4 bg-gray-darker p-4 rounded-lg shadow-lg border border-gray-dark"
      aria-labelledby="phone-section-title"
    >
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
        <Controller
          name="phone_primary"
          control={control}
          render={({ field }) => (
            <InputField
              label="Telefone Principal"
              id="phone_primary"
              type="tel"
              required
              placeholder="(11) 98888-8888"
              autoComplete="tel"
              Icon={PhoneIconGrayPrimary}
              width="w-full"
              value={formatPhone(field.value) || ""}
              onChange={(e) => {
                const rawValue = unformatPhone(e.target.value);
                field.onChange(rawValue);
              }}
              error={errors.phone_primary}
            />
          )}
        />

        <Controller
          name="phone_secondary"
          control={control}
          render={({ field }) => (
            <InputField
              label="Telefone Secundário"
              id="phone_secondary"
              type="tel"
              placeholder="(11) 98888-8888 (Opcional)"
              autoComplete="tel"
              Icon={PhoneIconGray}
              width="w-full"
              value={formatPhone(field.value) || ""}
              onChange={(e) => {
                const rawValue = unformatPhone(e.target.value);
                field.onChange(rawValue);
              }}
              error={errors.phone_secondary}
            />
          )}
        />
      </fieldset>
    </section>
  );
};

PhoneSection.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default PhoneSection;
