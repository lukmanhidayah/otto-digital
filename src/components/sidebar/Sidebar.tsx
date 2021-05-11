import { Link } from "react-router-dom";

import { ReactComponent as DashboardIcon } from "../../assets/svg/icons/dashboard.svg";
import { ReactComponent as CategoryIcon } from "../../assets/svg/icons/category.svg";
import { ReactComponent as ProductIcon } from "../../assets/svg/icons/product.svg";
import { ReactComponent as TransactionIcon } from "../../assets/svg/icons/transaction.svg";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <ul className="sidebar">
      <div className="w-full flex items-center justify-center mt-10 mb-10">
        <h1 className="font-bold text-lg">Logo</h1>
      </div>
      <li>
        <Link className="sidebar-link active" to="/dashboard">
          <DashboardIcon width={20} height={20} className="mr-4" />
          Dashboard
        </Link>
      </li>
      <li>
        <Link className="sidebar-link" to="/kategori">
          <CategoryIcon width={20} height={20} className="mr-4" />
          Kategori
        </Link>
      </li>
      <li>
        <Link className="sidebar-link" to="/profile">
          <ProductIcon width={20} height={20} className="mr-4" />
          Produk
        </Link>
      </li>
      <li>
        <Link className="sidebar-link" to="/transaksi">
          <TransactionIcon width={20} height={20} className="mr-4" />
          Transaksi
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
