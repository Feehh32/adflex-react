import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SidebarLogo from "../../assets/logoColorida.svg?react";
import HamburgerButton from "../UI/HamburguerButton";

const SidebarMobileHeader = ({ onOpen }) => {
  return (
    <div className="flex items-center justify-between bg-gray-darker border-b border-gray-dark px-4 py-3 md:hidden">
      <HamburgerButton onClick={onOpen} />
      <Link
        to="/"
        className="inline-flex focus-visible:outline focus-visible:outline-prim1"
      >
        <SidebarLogo className="h-7 w-auto" />
      </Link>
      <div className="w-10" />
    </div>
  );
};

SidebarMobileHeader.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default SidebarMobileHeader;
