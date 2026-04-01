import React from "react";
import PropTypes from "prop-types";

const ContactItem = ({ icon, content, href }) => {
  const Icon = icon;
  if (!content) return null;
  return (
    <a
      href={href}
      className="focus-visible flex gap-2 text-gray-medium items-center hover:text-light-gray transition"
    >
      <Icon className="w-4 h-4" />
      {content}
    </a>
  );
};

ContactItem.propTypes = {
  icon: PropTypes.element.isRequired,
  content: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default ContactItem;
