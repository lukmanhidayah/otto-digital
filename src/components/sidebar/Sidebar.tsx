import { Link } from "react-router-dom";

import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavBar } from "../../redux/utils/utilsAction";
import { useCallback } from "react";
import { OperatorIcon, CloseIcon, SalesIcon } from "../../assets/svg/icons";

import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";

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
  const user = useSelector((state: any) => state.user.user);
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
          <LogoIcon width={42} height={42} />
          <h1 className="logo ml-1">Otto Digital</h1>
          <button className="close-container" onClick={actionToggleNavBar}>
            <CloseIcon stroke="white" />
          </button>
        </div>
        <ul>
          {user.menu.map((res: any) => {
            return (
              <li>
                <Link
                  title={res}
                  className={`sidebar-link ${menuType === res && "active"}`}
                  to={`/${res.split(" ")[1]?.toLowerCase()}`}
                  onClick={actionToggleNavBar}
                >
                  <OperatorIcon width={20} height={20} className="icon" />
                  <span className="sidebar-text">{res}</span>
                </Link>
              </li>
            );
          })}

          {/* <li>
            <Link
              title="Category"
              className={`sidebar-link ${menuType === "category" && "active"}`}
              to="/sales"
              onClick={actionToggleNavBar}
            >
              <SalesIcon width={20} height={20} className="icon" />
              <span className="sidebar-text">Sales</span>
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
