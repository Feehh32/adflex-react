import { formatPhone } from "../../utils/formatters";
import PrimaryTel from "../../assets/icons/tel-primary-icon.svg?react";
import Email from "../../assets/icons/mail-icon-gray.svg?react";
import PropTypes from "prop-types";

const OsDocumentClient = ({
  clientName,
  phonePrimary,
  phoneSecondary,
  emailPrimary,
  emailSecondary,
}) => {
  return (
    <section className="w-full border-b border-gray-dark py-6 font-technical">
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-text-secondary">
          CLIENTE
        </p>

        <h4 className="mt-2 text-lg font-bold text-black">{clientName}</h4>
        <div className="mt-2 flex md:gap-6 md:flex-row flex-col gap-1 print:flex-row print:gap-6">
          <p className="flex items-center gap-2 text-sm text-text-secondary break-all">
            <Email aria-hidden="true" focusable="false" className="w-4 h-4" />
            {emailPrimary}
          </p>

          <p className="flex items-center gap-2 text-sm text-text-secondary">
            <PrimaryTel
              aria-hidden="true"
              focusable="false"
              className="w-4 h-4"
            />
            {formatPhone(phonePrimary)}
          </p>
        </div>
        <div className="mt-2 flex md:gap-6 md:flex-row flex-col gap-1 print:flex-row print:gap-6">
          {emailSecondary && emailSecondary !== emailPrimary && (
            <p className="flex items-center gap-2 text-sm text-text-secondary break-all">
              <Email aria-hidden="true" className="w-4 h-4" focusable="false" />
              {emailSecondary}
            </p>
          )}

          {phoneSecondary && phoneSecondary !== phonePrimary && (
            <p className="flex items-center gap-2 text-sm text-text-secondary">
              <PrimaryTel
                aria-hidden="true"
                className="w-4 h-4"
                focusable="false"
              />
              {formatPhone(phoneSecondary)}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

OsDocumentClient.propTypes = {
  clientName: PropTypes.string.isRequired,
  phonePrimary: PropTypes.string.isRequired,
  phoneSecondary: PropTypes.string,
  emailPrimary: PropTypes.string.isRequired,
  emailSecondary: PropTypes.string,
};

export default OsDocumentClient;
