import OsDocumentHeader from "./OsDocumentHeader";
import OsDocumentClient from "./OsDocumentClient";
import OsServicesArea from "./OsServicesArea";
import OsDocumentTotal from "./OsDocumentTotal";
import OsDocumentFooter from "./OsDocumentFooter";
import PropTypes from "prop-types";

const OsDocumentMobile = ({ serviceOrder }) => {
  return (
    <div className="px-4 py-6 space-y-6 bg-white">
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
    </div>
  );
};

OsDocumentMobile.propTypes = {
  serviceOrder: PropTypes.object.isRequired,
};

export default OsDocumentMobile;
