import { useAllDataContext } from "../pages/HomeLayout";

const AllDataContainer = () => {
  const { data } = useAllDataContext();

  if (!data) {
    return <div>Loading...</div>;
  }
  const { transactions } = data;
  return (
    <div className="max-w-6xl mx-auto  rounded-lg shadow-lg border border-gray-300">
      <table>
        <thead className="min-w-full border-collapse border border-gray-300">
          <tr className="bg-gray-100">
            <th className="p-2 text-center">Id</th>
            <th className="p-2 text-center">Image</th>
            <th className="p-2 text-center">Title</th>
            <th className="p-2 text-center">Price</th>
            <th className="p-2 text-center">Description</th>
            <th className="p-2 text-center">category</th>
            <th className="p-2 text-center">sold</th>
            <th className="p-2 text-center">dateOfSale</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr
              key={transaction._id}
              className="border-t border-gray-300 hover:bg-teal-100 transform hover:scale-125 hover:rounded-full transition duration-300 cursor-pointer "
            >
              <td className="p-2 text-sm font-semibold">{transaction.id}</td>
              <td className="p-2 text-sm font-semibold">
                <img src={transaction.image} />
              </td>
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
