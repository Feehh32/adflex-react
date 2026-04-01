import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import SidebarLogo from "../../assets/logoColorida.svg?react";
import HomeIcon from "../../assets/icons/home.svg?react";
import ServiceOrderIcon from "../../assets/icons/service-order.svg?react";
import AddIcon from "../../assets/icons/add.svg?react";
import SalesSummaryIcon from "../../assets/icons/sales-summary.svg?react";
import MonthlySalesIcon from "../../assets/icons/monthly-sales.svg?react";
import Arrow from "../../assets/icons/nav-arrow.svg?react";
import HamburgerButton from "../UI/HamburguerButton";
import SidebarMobileHeader from "./SidebarMobileHeader";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const canGoBack = window.history.state?.idx > 0;
  const canGoForward = window.history.state?.idx < window.history.length - 1;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
          role="presentation"
        />
      )}
      <aside
        id="sidebar-menu"
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col fixed md:static bg-gray-darker min-h-screen border-r border-gray-dark transition-transform duration-300 ease-in-out z-50 w-67.5 shadow-sm md:shadow-none md:translate-x-0`}
      >
        <header className="p-8 border-b border-gray-dark inline-flex gap-4 items-center">
          <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          <Link
            to="/"
            className=" focus-visible"
            onClick={() => setIsOpen(false)}
            aria-label="Página inicial"
          >
            <SidebarLogo className="h-7 w-auto" />
          </Link>
        </header>
        <nav aria-label="Navegação principal">
          <ul className="flex flex-col font-secondary">
            <li className="border-b border-gray-dark pt-8 pb-8 flex flex-col gap-5">
              <Link
                to="/"
                className="flex w-fit items-center gap-2 ml-8 hover:text-prim1 transition-colors duration-300 ease-in-out focus-visible"
                onClick={() => setIsOpen(false)}
              >
                <HomeIcon aria-hidden="true" />
                <span>Início</span>
              </Link>

              <Link
                to="/service-orders/new"
                className="w-fit focus-visible flex items-center gap-2 ml-8 hover:text-prim1 transition-colors duration-300 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                <ServiceOrderIcon aria-hidden="true" />
                <p>Gerar nova O.S</p>
              </Link>
            </li>
            <li className="border-b border-gray-dark pt-8 pb-8 flex flex-col gap-5">
              <Link
                to="/clients/new"
                className="focus-visible w-fit flex items-center gap-2 ml-8 hover:text-prim1 transition-colors duration-300 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                <AddIcon className="w-6 h-6" aria-hidden="true" />
                <p>Novo Cliente</p>
              </Link>

              <Link
                to="/sales-summary"
                className="focus-visible w-fit flex items-center gap-2 ml-8 hover:text-prim1 transition-colors duration-300 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                <SalesSummaryIcon className="w-6 h-6" aria-hidden="true" />
                <p>Vendas Mensais</p>
              </Link>

              <Link
                to="/monthly-sales"
                className="focus-visible w-fit flex items-center gap-2 ml-8 hover:text-prim1 transition-colors duration-300 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                <MonthlySalesIcon className="w-6 h-6" aria-hidden="true" />
                <p>Balanço Mensal</p>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex ml-8 pr-8 pt-2 justify-between items-center text-gray-medium">
          <button
            className={`focus-visible flex items-center gap-2 p-2 rounded-md text-sm 
              ${
                canGoBack
                  ? "cursor-pointer hover:bg-gray-dark"
                  : "opacity-40 cursor-auto pointer-events-none"
              }`}
            onClick={() => navigate(-1)}
            disabled={!canGoBack}
          >
            <Arrow
              className="rotate-180 text-gray-medium w-5 h-5"
              aria-hidden="true"
            />
            <span>Voltar</span>
          </button>
          <button
            className={`focus-visible flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-dark rounded-md text-sm ${
              canGoForward
                ? "cursor-pointer hover:bg-gray-dark"
                : "opacity-40 cursor-auto pointer-events-none"
            }`}
            onClick={() => navigate(1)}
            disabled={!canGoBack}
          >
            <span>Avançar</span>
            <Arrow className="text-gray-medium w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <footer className="text-light-gray text-xs p-8 text-center mt-auto">
          <p>
            Desenvolvido por Fernando Pereira Alguns — direitos reservados —{" "}
            {new Date().getFullYear()}
          </p>
        </footer>
      </aside>
      <SidebarMobileHeader onOpen={() => setIsOpen(true)} />
    </>
  );
};

export default Sidebar;
