import { AllDataContainer, Navbar, SearchContainer, SelectContainer } from "../components";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import customFetch from "../utils/customFetch";

export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const { data } = await customFetch.get("/app", { params });
    console.log(data);
    return { data, searchParams: { ...params } };
  } catch (error) {
    return error;
  }
};

const allDataContext = createContext();

const HomeLayout = () => {
  const { data, searchValues } = useLoaderData();
  return (
    <allDataContext.Provider value={{ data, searchValues }}>
      <nav className="bg-gray-100">
        <Navbar />
      </nav>
      <div>
        <div>
          <div>
            <SearchContainer />
            <SelectContainer/>
            <div>
              <AllDataContainer />
            </div>
          </div>
        </div>
      </div>
    </allDataContext.Provider>
  );
};

export const useAllDataContext = () => useContext(allDataContext);
export default HomeLayout;
