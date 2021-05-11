import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <ul className="sidebar">
      <li>
        <Link className="px-4 block p-2" to="/home">
          Home
        </Link>
      </li>
      <li>
        <Link className="px-4 block p-2" to="/category">
          category
        </Link>
      </li>
      <li>
        <Link className="px-4 block p-2" to="/profile">
          profile
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
