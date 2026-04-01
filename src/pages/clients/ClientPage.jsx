import { useParams } from "react-router-dom";
import { useState } from "react";
import Spinner from "../../components/UI/Spinner";
import ClientOverview from "./ClientOverview";
import ClientMetrics from "./ClientMetrics";
import OsArea from "./OsArea";
import { useClientPageData } from "../../hooks/useClientPageData";
import useDebounce from "../../hooks/useDebounce";

const ClientPage = () => {
  const { clientId } = useParams();
  const [search, setSearch] = useState("");

  const debounceSearch = useDebounce(search, 500);
  const {
    client,
    metrics,
    orders,
    pagination,
    loading,
    nextPage,
    prevPage,
    isSearching,
  } = useClientPageData(clientId, debounceSearch);

  if (loading) return <Spinner title="Carregando a página do cliente" />;

  return (
    <>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl md:text-[32px] font-secondary font-bold mb-2">
            {client?.name}
            <span className="text-prim1" aria-hidden="true">
              .
            </span>
          </h1>
          <ClientOverview client={client} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          <OsArea
            orders={orders}
            nextPage={nextPage}
            prevPage={prevPage}
            pagination={pagination}
            isSearching={isSearching}
            search={search}
            setSearch={setSearch}
          />
          <ClientMetrics metrics={metrics} />
        </div>
      </div>
    </>
  );
};

export default ClientPage;
