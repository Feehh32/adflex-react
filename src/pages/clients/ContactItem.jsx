import React from "react";
import PropTypes from "prop-types";

const ContactItem = ({ icon, content, href, isDeleted }) => {
  const Icon = icon;
  const baseClass = "flex gap-2 items-center transition";

  const activeClass =
    "focus-visible text-gray-medium hover:text-light-gray cursor-pointer";

  const disabledClass = "text-gray-medium opacity-50 cursor-not-allowed";

  if (!content) return null;

  if (isDeleted) {
    return (
      <div className={`${baseClass} ${disabledClass}`}>
        <Icon className="w-4 h-4" aria-hidden="true" focusable="false" />
        {content}
      </div>
    );
  }
  return (
    <a
      href={href}
      className={`${baseClass} ${activeClass}`}
      aria-hidden="true"
      focusable="false"
    >
      <Icon className="w-4 h-4" aria-hidden="true" focusable="false" />
      {content}
    </a>
  );
};

ContactItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  content: PropTypes.string,
  href: PropTypes.string,
};

export default ContactItem;
