import { Link } from "react-router-dom";

import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavBar } from "../../redux/utils/utilsAction";
import { useCallback } from "react";
import {
  HomeIcon,
  MessageIcon,
  ReplyIcon,
  HistoryIcon,
  ScheduleIcon,
  CloseIcon,
} from "../../assets/svg/icons";

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
          <h1 className="logo ml-1">Logo</h1>
          <button className="close-container" onClick={actionToggleNavBar}>
            <CloseIcon />
          </button>
        </div>
        <ul>
          <li>
            <Link
              title="Beranda"
              className={`sidebar-link ${menuType === "home" && "active"}`}
              to="/home"
              onClick={actionToggleNavBar}
            >
              <HomeIcon width={20} height={20} className="icon" />
              <span className="sidebar-text">Beranda</span>
            </Link>
          </li>
          <li>
            <Link
              title="Kirim Pesan"
              className={`sidebar-link ${menuType === "message" && "active"}`}
              to="/message"
              onClick={actionToggleNavBar}
            >
              <MessageIcon width={20} height={20} className="icon" />
              <span className="sidebar-text">Message</span>
            </Link>
          </li>
          <li>
            <Link
              title="Balas Otomatis"
              className={`sidebar-link ${menuType === "reply" && "active"}`}
              to="/reply"
              onClick={actionToggleNavBar}
            >
              <ReplyIcon width={20} height={20} className="icon" />
              <span className="sidebar-text">Balas Otomatis</span>
            </Link>
          </li>
          <li>
            <Link
              title="Pesan Terjadwal"
              className={`sidebar-link ${menuType === "schedule" && "active"}`}
              to="/schedule"
              onClick={actionToggleNavBar}
            >
              <ScheduleIcon width={20} height={20} className="icon" />
              <span className="sidebar-text">Pesan Terjadwal</span>
            </Link>
          </li>
          <li>
            <Link
              title="Riwayat Pesan"
              className={`sidebar-link ${menuType === "history" && "active"}`}
              to="/history"
              onClick={actionToggleNavBar}
            >
              <HistoryIcon width={20} height={20} className="icon" />
              <span className="sidebar-text">Riwayat Pesan</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
