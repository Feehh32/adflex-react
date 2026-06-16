import { useState, useRef } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import toast from "react-hot-toast";
import LogoutIcon from "../../assets/icons/logout-icon.svg?react";

const SidebarUserMenu = () => {
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();
  const menuRef = useRef();

  const userInitial = user?.email?.[0]?.toUpperCase();

  useOutsideClick(menuRef, () => setOpen(false), open);

  const handleLogout = async () => {
    try {
      const { error } = await signOut();
      if (error) throw error;
    } catch (err) {
      toast.error(err.message || "Erro ao fazer logout");
    }
  };

  return (
    <div
      className="relative flex items-center gap-2 justify-center"
      ref={menuRef}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="truncate flex-1 cursor-pointer hover:text-prim1 transition-colors duration-300 ease-in-out flex items-center gap-2 justify-center"
      >
        <span
          className="w-6 h-6 rounded-full bg-gray-dark border border-gray-medium flex items-center justify-center"
          aria-hidden="true"
        >
          {userInitial}
        </span>
        <span className="truncate">{user?.email}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            open ? "rotate-180" : ""
          } fill-current`}
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="p-1 pl-2 flex gap-2 text-sm absolute top-[120%] bg-gray-dark rounded-md border border-gray-medium w-[90%] shadow-lg items-center">
          <LogoutIcon aria-hidden="true" className="w-5 h-5" />
          <button
            type="button"
            onClick={handleLogout}
            className="font-semibold cursor-pointer w-full p-1 text-left hover:text-prim1 transition-colors duration-300 ease-in-out"
          >
            Sair
          </button>
        </div>
      )}
    </div>
  );
};

export default SidebarUserMenu;
