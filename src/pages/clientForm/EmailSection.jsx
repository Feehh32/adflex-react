import PropTypes from "prop-types";
import MailIcon from "../../assets/icons/mail-icon.svg?react";
import MailIconGray from "../../assets/icons/mail-icon-gray.svg?react";
import InputField from "../../components/UI/InputField";

const EmailsSection = ({ register, errors }) => {
  return (
    <section
      className="flex flex-col gap-4 bg-gray-darker p-4 rounded-lg shadow-lg border border-gray-dark"
      aria-labelledby="emails-section-title"
    >
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-lg border border-prim2/50 bg-gray-input inline-block">
          <MailIcon className="w-6 h-6" />
        </div>

        <div>
          <h2
            className="text-lg md:text-xl text-light-gray font-secondary font-bold"
            id="emails-section-title"
          >
            Contatos - Emails
          </h2>

          <span className="text-sm text-gray-medium">
            Contatos de email do cliente.
          </span>
        </div>
      </div>

      <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <legend className="sr-only">Emails</legend>
        <InputField
          label="Email Principal"
          name="email_primary"
          id="email_primary"
          type="email"
          autoComplete="email"
          required
          placeholder="Digite o email do cliente"
          Icon={MailIconGray}
          width="full"
          register={register}
          error={errors.email_primary}
        />

        <InputField
          label="Email Secundário"
          name="email_secondary"
          id="email_secondary"
          type="email"
          autoComplete="email"
          placeholder="Digite o email do cliente (Opcional)"
          Icon={MailIconGray}
          width="full"
          register={register}
          error={errors.email_secondary}
        />
      </fieldset>
    </section>
  );
};

EmailsSection.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default EmailsSection;
