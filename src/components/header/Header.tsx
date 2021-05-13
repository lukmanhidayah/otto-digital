import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowDownIcon } from "../../assets/svg/icons/arrowDown.svg";
import { ReactComponent as MenuIcon } from "../../assets/svg/icons/menu.svg";
import { toggleNavBar } from "../../redux/utils/utilsAction";

import "./Header.css";

const Header = () => {
  const [isHideUserMenu, setIsHideUserMenu] = useState(true);

  const showUserMenu = () => setIsHideUserMenu((prevState) => !prevState);
  const dispatch = useDispatch();

  return (
    <header>
      <nav className="header">
        {/* logo container */}
        <div className="left-header">
          <button
            className="block p-2 md:hidden focus:outline-none"
            onClick={() => {
              dispatch(toggleNavBar());
            }}
          >
            <MenuIcon width={32} height={32} />
          </button>
          <div className="title-container">
            <h1>Dashboard</h1>
            <h3 className="text-xs font-light">Senin, 14 Mei 2021</h3>
          </div>
        </div>
        <button onClick={showUserMenu} className="user-container">
          <div className="user-content">
            <div className="user-profile-container z-20">
              <img
                src="https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=6&m=1009749608&s=612x612&w=0&h=ckLkBgedCLmhG-TBvm48s6pc8kBfHt7Ppec13IgA6bo="
                alt="profile"
                className="user-profile"
              />
            </div>

            <div className="user-name-container">
              <h4 className="leading-tight text-md">Lukman Hidayah</h4>
            </div>
          </div>
          <div className="icon-container">
            <ArrowDownIcon
              className={`icon ${!isHideUserMenu && "transform rotate-180"}`}
            />
          </div>

          <div
            className={`user-menu-container ${isHideUserMenu && "hidden"} z-10`}
          >
            <ul>
              <li>
                <Link to="/profile/edit" className="user-menu">
                  Ubah data pengguna
                </Link>
              </li>
              <li>
                <Link to="/profile/edit" className="user-menu">
                  Ubah data perusahaan
                </Link>
              </li>
              <li>
                <Link to="/profile/edit" className="user-menu">
                  Keluar
                </Link>
              </li>
            </ul>
          </div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
