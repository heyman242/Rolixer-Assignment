import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  AllDataContainer,
  Navbar,
  SearchContainer,
  PageButtonContainer,
  StatsContainer,
} from "../components";
import { createContext, useContext } from "react";
import customFetch from "../utils/customFetch";

const allDataContext = createContext();

const HomeLayout = ({ defaultMonth }) => {
  const { search } = useLocation();
  const { month } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  const fetchDataAndUpdateState = async (newMonth) => {
    try {
      const response = await customFetch.get(`/app/${newMonth}`, {
        params: new URLSearchParams(search),
      });
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!month) {
      navigate(`/${defaultMonth}`);
    } else {
      fetchDataAndUpdateState(month);
    }
  }, [month, search]);

  const handleMonthChange = (newMonth) => {
    fetchDataAndUpdateState(newMonth);
    navigate(`/${newMonth}`);
  };
  return (
    <allDataContext.Provider value={{ data, search }}>
      <nav className="bg-gray-100">
        <Navbar />
      </nav>
      <div>
        <div>
          <div>
            <div>
              <SearchContainer />
              <div className="mt-4">
                <label htmlFor="selectedMonth" className="mr-2">
                  Select Month:
                </label>
                <select
                  name="selectedMonth"
                  id="selectedMonth"
                  onChange={(e) => handleMonthChange(e.target.value)}
                  value={month}
                  className="px-2 py-1 border border-gray-300 rounded-md"
                >
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
            </div>
            <div><StatsContainer/></div>
            <div>
              <div>
                <AllDataContainer />
              </div>
              <PageButtonContainer />
            </div>
          </div>
        </div>
      </div>
    </allDataContext.Provider>
  );
};

export const useAllDataContext = () => useContext(allDataContext);
export default HomeLayout;
