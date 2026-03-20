import Spinner from "../../components/UI/Spinner";
import { useDashboardStats } from "../../hooks/useDashboardStats";
import ClientsArea from "./ClientsArea";
import LastOs from "./LastOs";
import MonthlyRevenue from "./MonthlyRevenue";
import TopClients from "./TopClients";
import SearchClients from "./SearchClients";

const Home = () => {
  const { totalOS, monthlyRevenue, topClients, lastOs, allClients, loading } =
    useDashboardStats();

  if (loading) return <Spinner title="Carregando dashboard" />;

  return (
    <>
      {/* Home Header */}
      <div className="flex gap-4 flex-wrap justify-between items-center">
        <h1 className="text-2xl md:text-[32px] font-secondary font-bold">
          Bem-vindo de volta
          <span className="text-prim1" aria-hidden="true">
            .
          </span>
        </h1>
        <SearchClients allClients={allClients} />
      </div>
      {/* monthly Revenue */}
      <MonthlyRevenue totalOS={totalOS} monthlyRevenue={monthlyRevenue} />
      {/* TOP 3 clients and last 3 os */}
      <div className="flex gap-8 flex-col md:flex-row justify-between">
        <TopClients topClients={topClients} />
        <LastOs lastOs={lastOs} />
      </div>

      <ClientsArea allClients={allClients} />
    </>
  );
};

export default Home;
