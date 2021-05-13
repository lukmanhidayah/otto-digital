import { Link } from "react-router-dom";

import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavBar } from "../../redux/utils/utilsAction";
import { useCallback } from "react";
import {
  DashboardIcon,
  CategoryIcon,
  ProductIcon,
  TransactionIcon,
  CloseIcon,
} from "../../assets/svg/icons";

type SideBarType = {
  menuType: String;
};

type StateSelectorType = {
  utils: {
    isShowNavBar: Boolean;
  };
};

const Sidebar = ({ menuType }: SideBarType) => {
  const isShowNavBar = useSelector(
    (state: StateSelectorType) => state.utils.isShowNavBar
  );

  const dispatch = useDispatch();

  const actionToggleNavBar = useCallback(() => {
    if (isShowNavBar) {
      dispatch(toggleNavBar());
    }

    //eslint-disable-next-line
  }, [isShowNavBar]);

  return (
    <div className={`sidebar ${!isShowNavBar && "hidden"} md:block`}>
      <div className="sidebar-content">
        <div className="logo-container">
          <h1 className="logo">Logo</h1>
          <button className="close-container" onClick={actionToggleNavBar}>
            <CloseIcon />
          </button>
        </div>
        <ul>
          <li>
            <Link
              title="dashboard"
              className={`sidebar-link ${menuType === "dashboard" && "active"}`}
              to="/dashboard"
              onClick={actionToggleNavBar}
            >
              <DashboardIcon width={20} height={20} className="icon" />
              <span className="sidebar-text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              title="Kategori"
              className={`sidebar-link ${menuType === "category" && "active"}`}
              to="/category"
              onClick={actionToggleNavBar}
            >
              <CategoryIcon width={20} height={20} className="icon" />
              <span className="sidebar-text">Kategori</span>
            </Link>
          </li>
          <li>
            <Link
              title="Produk"
              className={`sidebar-link ${menuType === "product" && "active"}`}
              to="/product"
              onClick={actionToggleNavBar}
            >
              <ProductIcon width={20} height={20} className="icon" />
              <span className="sidebar-text">Produk</span>
            </Link>
          </li>
          <li>
            <Link
              title="Transaksi"
              className={`sidebar-link ${
                menuType === "transaction" && "active"
              }`}
              to="/transaction"
              onClick={actionToggleNavBar}
            >
              <TransactionIcon width={20} height={20} className="icon" />
              <span className="sidebar-text">Transaksi</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
