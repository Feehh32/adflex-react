import OsDocument from "./OsDocument";
import OsPageSidebar from "./OsPageSidebar";
import { Link, useParams } from "react-router-dom";
import { useServiceOrder } from "../../hooks/useServiceOrder";
import Spinner from "../../components/UI/Spinner";

const ServiceOrderPage = () => {
  const { osId: id } = useParams();
  const { loading, serviceOrder, fetchServiceOrder } = useServiceOrder(id);

  if (loading) return <Spinner title="Carregando ordem de serviço..." />;
  if (!serviceOrder)
    return (
      <section className="flex flex-col gap-6 bg-gray-darker p-4 rounded-lg justify-center items-center">
        <h1 className="text-2xl md:text-[32px] font-secondary font-bold">
          O.S não encontrada
        </h1>

        <p>A ordem de serviço solicitada não existe ou foi removida.</p>
        <Link
          className="text-prim1 underline hover:text-prim2 transition duration-200"
          to="/"
        >
          Voltar para a página inicial
        </Link>
      </section>
    );

  return (
    <section className="flex flex-col gap-6">
      <div className="mb-2 print:hidden">
        <h1 className="text-2xl md:text-[32px] font-secondary font-bold">
          O.S 001
          <span className="text-prim1" aria-hidden="true">
            .
          </span>
        </h1>
        <span className="text-sm text-gray-medium">
          Visualização da ordem de serviço
        </span>
      </div>
      <div className="grid gap-6 xl:grid-cols-[1fr_320px] items-start">
        <OsDocument serviceOrder={serviceOrder} />
        <OsPageSidebar
          serviceOrder={serviceOrder}
          refreshServiceOrder={fetchServiceOrder}
        />
      </div>
    </section>
  );
};

export default ServiceOrderPage;
