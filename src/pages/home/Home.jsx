import Spinner from "../../components/UI/Spinner";
import { useDashboardStats } from "../../hooks/useDashboardStats";
import ClientsArea from "./ClientsArea";
import LastOs from "./LastOs";
import MonthlyRevenue from "./MonthlyRevenue";
import TopClients from "./TopClients";
import SearchClients from "./SearchClients";
import { usePageMetadata } from "../../hooks/usePageMetadata";

const Home = () => {
  const { totalOS, monthlyRevenue, topClients, lastOs, allClients, loading } =
    useDashboardStats();

  usePageMetadata({ title: "Home" });

  if (loading) return <Spinner title="Carregando dashboard" />;

  return (
    <>
      <header className="flex gap-4 flex-wrap justify-between items-center">
        <h1 className="text-2xl md:text-[32px] font-secondary font-bold">
          Bem-vindo de volta
          <span className="text-prim1" aria-hidden="true">
            .
          </span>
        </h1>
        <SearchClients allClients={allClients} />
      </header>

      <MonthlyRevenue totalOS={totalOS} monthlyRevenue={monthlyRevenue} />

      <div className="grid gap-8 grid-cols-1 xl:grid-cols-[2fr_2fr]">
        <TopClients topClients={topClients} />
        <LastOs lastOs={lastOs} />
      </div>

      <ClientsArea allClients={allClients} />
    </>
  );
};

export default Home;
