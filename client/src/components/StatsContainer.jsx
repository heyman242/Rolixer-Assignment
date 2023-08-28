import { useEffect, useState } from "react";
import { useAllDataContext } from "../pages/HomeLayout";
import customFetch from "../utils/customFetch";

const StatsContainer = () => {
  const { data } = useAllDataContext();
  const [statsData, setStatsData] = useState(null);

  useEffect(() => {
    if (data && data.selectedMonth) {
      const fetchStats = async () => {
        try {
          const response = await customFetch.get(
            `/app/${data.selectedMonth}/stats`
          );
          setStatsData(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchStats();
    }
  }, [data]);

  if (!statsData) {
    return <div>Loading...</div>;
  }

  const { totalSaleAmount, totalSoldItems, totalNotSoldItems } = statsData;

  return (
    <div>
      <h2>Statistics for Month {data.selectedMonth}</h2>
      <p>Total Sale Amount: {totalSaleAmount}</p>
      <p>Total Sold Items: {totalSoldItems}</p>
      <p>Total Not Sold Items: {totalNotSoldItems}</p>
    </div>
  );
};

export default StatsContainer;
