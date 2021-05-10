import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul className="hidden md:block md-fixed md:w-1/6 shadow md:min-h-screen">
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
