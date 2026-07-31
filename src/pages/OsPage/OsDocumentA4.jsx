import OsDocumentHeader from "./OsDocumentHeader";
import OsDocumentClient from "./OsDocumentClient";
import OsServicesArea from "./OsServicesArea";
import OsDocumentTotal from "./OsDocumentTotal";
import OsDocumentFooter from "./OsDocumentFooter";
import PropTypes from "prop-types";

const OsDocumentA4 = ({ serviceOrder }) => {
  return (
    <div className="w-full overflow-auto flex justify-center">
      <article
        className="
          bg-white shadow-2xl
          w-[210mm] min-h-[297mm] p-[15mm]
          print:w-full
          print:min-h-0
          print:h-auto
          print:p-0
          print:m-0
          print:shadow-none
        "
      >
        <OsDocumentHeader
          code={serviceOrder.code}
          document_date={serviceOrder.document_date}
        />
        <OsDocumentClient
          clientName={serviceOrder.client.name}
          phonePrimary={serviceOrder.client.phone_primary}
          phoneSecondary={serviceOrder.client.phone_secondary}
          emailPrimary={serviceOrder.client.email_primary}
          emailSecondary={serviceOrder.client.email_secondary}
        />
        <OsServicesArea
          hideMeasure={serviceOrder.hide_measure}
          services={serviceOrder.services}
        />
        <OsDocumentTotal total={serviceOrder.total} />
        <OsDocumentFooter />
      </article>
    </div>
  );
};

OsDocumentA4.propTypes = {
  serviceOrder: PropTypes.object.isRequired,
};

export default OsDocumentA4;
