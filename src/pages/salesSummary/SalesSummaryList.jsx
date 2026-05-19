import SalesSummaryItem from "./SalesSummaryItem";

const SalesSummaryList = ({ period, salesSummaryList }) => {
  return (
    <section className=" flex flex-col gap-4">
      <h2 className="text-lg md:text-xl text-light-gray font-secondary font-bold">
        Vendas por cliente
      </h2>
      {salesSummaryList.map((sale) => (
        <SalesSummaryItem
          key={sale.client_id}
          client={sale.client_name}
          period={period}
          total={sale.total}
        />
      ))}
    </section>
  );
};

export default SalesSummaryList;
