import { Link } from "react-router-dom";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { useAuth } from "../../hooks/useAuth";

const NotFoundPage = () => {
  usePageMetadata({ title: "Página não encontrada" });
  const { user } = useAuth();
  const isAuthenticated = Boolean(user);

  return (
    <section
      className="flex flex-col gap-6 justify-center items-center"
      aria-labelledby="not-found"
    >
      <span aria-hidden="true" className="text-prim2 font-secondary text-9xl">
        404
      </span>
      <h1
        id="not-found"
        className="text-2xl md:text-[32px] font-secondary font-bold"
      >
        Página não encontrada
        <span className="text-prim2" aria-hidden="true">
          .
        </span>
      </h1>

      <p>A página que você procurou não foi encontrada ou foi removida.</p>

      <Link
        to={isAuthenticated ? "/" : "/login"}
        className="focus-visible px-4 py-2 rounded-lg bg-prim2 cursor-pointer text-gray-darker font-medium hover:opacity-90 transition min-w-32.5 flex justify-center items-center"
      >
        {isAuthenticated ? "Voltar para a Dashboard" : "Entrar"}
      </Link>
    </section>
  );
};

export default NotFoundPage;
