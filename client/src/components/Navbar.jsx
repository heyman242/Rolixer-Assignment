import { Link } from "react-router-dom";
import {MainIcon} from "../assets/icons";

const Navbar = () => {
  return (
    <header className="p-2 md:p-4 flex justify-center items-center">
      <Link to="/" className="flex items-center gap-1">
        <MainIcon />
        <span className="font-bold text-xl">Transaction DashBoard</span>
      </Link>
     
    </header>
  );
};

export default Navbar;
