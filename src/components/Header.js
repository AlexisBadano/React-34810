import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to='/'><h1 className="brand">Thunder Jam's</h1></Link>
      <NavBar />
    </header>
  );
};

export default Header;
