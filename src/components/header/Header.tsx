import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrowDownIcon, MenuIcon, LogoutIcon } from "../../assets/svg/icons";
import { logout } from "../../redux/user/userAction";
import { toggleNavBar } from "../../redux/utils/utilsAction";
import FirstLetterUpper from "../../utils/AllFirstLetterUp";
import FormatDate from "../../utils/FormatDate";
import TextInput from "../form/TextInput";
import ModalApp from "../modal/ModalApp";

import "./Header.css";

type HeaderType = {
  menuType: String;
};

const Header = ({ menuType }: HeaderType) => {
  const [isHideUserMenu, setIsHideUserMenu] = useState(true);
  const [isModalShow, setIsModalShow] = useState(false);
  const user = useSelector((state: any) => state.user.user);

  const dispatch = useDispatch();
  const showUserMenu = () => setIsHideUserMenu((prevState) => !prevState);

  const onToggleModal = () => setIsModalShow((prevState) => !prevState);

  const getDayName = () => {
    var d = new Date();
    return d.toString().split(" ")[0];
  };

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      {/* modal change profile*/}
      {isModalShow && (
        <ModalApp onToggleModal={onToggleModal} title="Profile user">
          <>
            <TextInput
              name="name"
              type="text"
              placeholder="Nama Pengguna"
              value={user.name}
              disabled={true}
            />
            <TextInput
              name="role"
              type="text"
              placeholder="Role"
              min={1}
              disabled={true}
              value={user.role}
            />
            <div className="relative w-full">
              <h5 className="block text-gray-900 text-sm font-normal pb-1">
                Menus
              </h5>
              {user.menu.map((res: any) => {
                return (
                  <div className="py-1">
                    <span className="text-left text-xs font-normal py-2 px-2 bg-blue-100 rounded">
                      &#8226; {res}
                    </span>
                  </div>
                );
              })}
            </div>
          </>
        </ModalApp>
      )}
      {/* end of modal change profile */}

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
            <h1 className="text-xl font-bold">{FirstLetterUpper(menuType)}</h1>
            <h3 className="text-xs leading-1 font-light">
              {getDayName()}, {FormatDate(new Date())}
            </h3>
          </div>
        </div>
        <button onClick={showUserMenu} className="user-container">
          <div className="user-content">
            <div className="user-profile-container z-20">
              <span className="user-profile">{user.name.split("")[0]}</span>
            </div>

            <div className="user-name-container">
              <h4 className="leading-tight text-md font-bold">{user.name}</h4>
              <p className="text-xs">{user.role}</p>
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
                <div onClick={onToggleModal} className="user-menu">
                  Profile
                </div>
              </li>
              <li>
                <div className="user-menu" onClick={onLogout}>
                  <span>Logout</span>
                  <LogoutIcon width={24} height={24} />
                </div>
              </li>
            </ul>
          </div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
