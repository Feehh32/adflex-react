import Logo from "../../assets/logoColorida.svg?react";
import LoginForm from "./LoginForm";
import { usePageMetadata } from "../../hooks/usePageMetadata";

const LoginPage = () => {
  usePageMetadata({ title: "Entrar" });

  return (
    <div className="flex flex-col gap-6">
      <section
        aria-labelledby="login-page-title"
        className="flex flex-col gap-2 justify-center items-center border-b border-gray-dark pb-6"
      >
        <h1 id="login-page-title">
          <Logo className="w-32" />
          <span className="sr-only">ADFlex</span>
        </h1>
        <span className="font-secondary text-gray-medium text-center">
          Sistema Administrativo de Ordens de Serviço
        </span>
      </section>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
