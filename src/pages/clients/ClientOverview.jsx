import { Link } from "react-router-dom";
import { formatPhone } from "../../utils/formatters";
import ContactItem from "./ContactItem";
import MailIcon from "../../assets/icons/mail-icon.svg?react";
import TelPrimaryIcon from "../../assets/icons/tel-primary-icon.svg?react";
import TelSecondaryIcon from "../../assets/icons/tel-secondary-icon.svg?react";
import AddOs from "../../assets/icons/add-os.svg?react";
import Edit from "../../assets/icons/edit.svg?react";
import PropTypes from "prop-types";

const ClientOverview = ({ client, isDeleted }) => {
  const styleButton =
    "focus-visible flex gap-2 py-2 items-center font-semibold px-4 md:px-8 bg-gray-darker border border-gray-dark rounded-md shadow-md hover:scale-105 transition duration-300 ease-in-out text-gray-medium md:w-40 justify-center";

  return (
    <section>
      <div className="flex gap-6 flex-wrap ">
        <ContactItem
          isDeleted={isDeleted}
          icon={MailIcon}
          content={client?.email_primary}
          href={`mailto:${client?.email_primary}`}
        />
        <ContactItem
          isDeleted={isDeleted}
          icon={MailIcon}
          content={client?.email_secondary}
          href={`mailto:${client?.email_secondary}`}
        />
      </div>
      <div className="flex gap-6 flex-wrap mt-4">
        <ContactItem
          isDeleted={isDeleted}
          icon={TelPrimaryIcon}
          content={formatPhone(client?.phone_primary)}
          href={`tel:${client?.phone_primary}`}
        />
        <ContactItem
          isDeleted={isDeleted}
          icon={TelSecondaryIcon}
          content={formatPhone(client?.phone_secondary)}
          href={`tel:${client?.phone_secondary}`}
        />
      </div>
      {isDeleted ? (
        <div className="flex gap-6 flex-wrap mt-6">
          <button
            className={`${styleButton} cursor-not-allowed opacity-50`}
            disabled
          >
            <AddOs className="w-4 h-4" />
            Nova OS
          </button>

          <button
            className={`${styleButton} cursor-not-allowed opacity-50`}
            disabled
          >
            <Edit className="w-4 h-4" />
            Editar
          </button>
        </div>
      ) : (
        <div className="flex gap-6 flex-wrap mt-6">
          <Link to={`/service-orders/${client?.id}`} className={styleButton}>
            <AddOs className="w-4 h-4" />
            Nova OS
          </Link>
          <Link to={`/clients/${client?.id}/edit`} className={styleButton}>
            <Edit className="w-4 h-4" />
            Editar
          </Link>
        </div>
      )}
    </section>
  );
};

ClientOverview.propTypes = {
  client: PropTypes.object,
  isDeleted: PropTypes.bool,
};

export default ClientOverview;
