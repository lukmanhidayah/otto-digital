import { Link } from "react-router-dom";

import { ReactComponent as DashboardIcon } from "../../assets/svg/icons/dashboard.svg";
import { ReactComponent as CategoryIcon } from "../../assets/svg/icons/category.svg";
import { ReactComponent as ProductIcon } from "../../assets/svg/icons/product.svg";
import { ReactComponent as TransactionIcon } from "../../assets/svg/icons/transaction.svg";

import "./Sidebar.css";

type SideBarType = {
  menuType: String;
};

const Sidebar = ({ menuType }: SideBarType) => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="w-full flex items-center justify-center mt-10 mb-10">
          <h1 className="font-bold text-lg">Logo</h1>
        </div>
        <ul>
          <li>
            <Link
              className={`sidebar-link ${menuType === "dashboard" && "active"}`}
              to="/dashboard"
            >
              <DashboardIcon width={20} height={20} className="icon" />
              <span className="hidden lg:block">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              className={`sidebar-link ${menuType === "category" && "active"}`}
              to="/category"
            >
              <CategoryIcon width={20} height={20} className="icon" />
              <span className="hidden lg:block">Kategori</span>
            </Link>
          </li>
          <li>
            <Link
              className={`sidebar-link ${menuType === "product" && "active"}`}
              to="/product"
            >
              <ProductIcon width={20} height={20} className="icon" />
              <span className="hidden lg:block">Produk</span>
            </Link>
          </li>
          <li>
            <Link
              className={`sidebar-link ${
                menuType === "transaction" && "active"
              }`}
              to="/transaction"
            >
              <TransactionIcon width={20} height={20} className="icon" />
              <span className="hidden lg:block">Transaksi</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
