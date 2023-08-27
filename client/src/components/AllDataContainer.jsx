import { useAllDataContext } from "../pages/HomeLayout";

const AllDataContainer = () => {
  const { data } = useAllDataContext();
  const { transactions, numOfPages } = data;

  return (
    <div className="max-w-7xl mx-auto p-6 rounded-lg shadow-lg border border-gray-300">
      <table>
        <thead className="min-w-full border-collapse border border-gray-300">
          <tr className="bg-gray-100">
            <th className="p-2 text-center">Id</th>
            <th className="p-2 text-center">title</th>
            <th className="p-2 text-center">price</th>
            <th className="p-2 text-center">description</th>
            <th className="p-2 text-center">category</th>
            <th className="p-2 text-center">sold</th>
            <th className="p-2 text-center">dateOfSale</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id} className="border-t border-gray-300">
              <td className="p-2 text-sm font-semibold">{transaction.id}</td>
              <td className="p-2 text-sm font-semibold">{transaction.title}</td>
              <td className="p-2 text-sm font-semibold">{transaction.price}</td>
              <td className="p-2 text-sm font-semibold">
                {transaction.description}
              </td>
              <td className="p-2 text-sm font-semibold">
                {transaction.category}
              </td>
              <td className="p-2 text-sm font-semibold">
                {transaction.sold ? "Yes" : "No"}
              </td>
              <td className="p-2 text-sm font-semibold">
                {transaction.dateOfSale}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default AllDataContainer;
