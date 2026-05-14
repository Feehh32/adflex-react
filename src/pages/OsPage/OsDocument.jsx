import OsDocumentA4 from "./OsDocumentA4";
import OsDocumentMobile from "./OsDocumentMobile";
import PropTypes from "prop-types";

const OsDocument = ({ serviceOrder }) => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block print:block">
        <OsDocumentA4 serviceOrder={serviceOrder} />
      </div>

      {/* Mobile */}
      <div className="md:hidden print:hidden">
        <OsDocumentMobile serviceOrder={serviceOrder} />
      </div>
    </>
  );
};

OsDocument.propTypes = {
  serviceOrder: PropTypes.object,
};

export default OsDocument;
