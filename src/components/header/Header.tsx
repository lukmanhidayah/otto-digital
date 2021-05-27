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

  // data modal user
  const [dataModal, setDataModal] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    photo: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // data modal company
  const [dataModalCompany, setDataModalCompany] = useState({
    name: "",
    phoneNumber: "",
    photo: "",
  });

  const dispatch = useDispatch();
  const showUserMenu = () => setIsHideUserMenu((prevState) => !prevState);

  const onToggleModal = () => setIsModalShow((prevState) => !prevState);

  const onChange = (e: { target: { name: string; value: any } }) => {
    const { name, value } = e.target;
    setDataModal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getDayName = () => {
    var d = new Date();
    return d.toString().split(" ")[0];
  };

  const onLogout = () => {
    dispatch(logout())
  }

  return (
    <header>
      {/* modal change profile*/}
      {isModalShow && (
        <ModalApp onToggleModal={onToggleModal} title="Ubah data pengguna">
          <>
            <TextInput
              name="name"
              type="text"
              onChange={onChange}
              placeholder="Nama Pengguna"
              value={dataModal.name}
            />
            <TextInput
              name="email"
              type="email"
              onChange={onChange}
              placeholder="Email"
              min={1}
              value={dataModal.email}
            />
            <TextInput
              name="phoneNumber"
              type="text"
              placeholder="Nomor Telepon"
              onChange={onChange}
              min={1}
              value={dataModal.phoneNumber}
            />
            <TextInput
              name="photo"
              accept="image/*"
              type="file"
              onChange={onChange}
              placeholder="Foto Pengguna"
              value={dataModal.photo}
            />
            <div className="relative w-full">
              <h5 className="block text-gray-900 text-sm font-normal mb-2 border-b pb-1">
                Ubah Kata Sandi
              </h5>
              <div className="pl-3">
                <label className="inline-flex text-sm items-center cursor-pointer">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    className="form-radio text-blue-800"
                    checked
                  />
                  <span className="ml-2 text-gray-900">Tidak</span>
                </label>
                <label className="inline-flex text-sm items-center cursor-pointer ml-5">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    className="form-radio  text-blue-800 border"
                  />
                  <span className="ml-2 text-gray-900">Ubah</span>
                </label>
              </div>
            </div>
            <div className="hidden py-2">
              <TextInput
                name="oldPassword"
                type="password"
                placeholder="Kata Sandi Lama"
                onChange={onChange}
                value={dataModal.oldPassword}
              />
              <TextInput
                name="newPassword"
                type="password"
                placeholder="Kata Sandi Baru"
                onChange={onChange}
                value={dataModal.newPassword}
              />
              <TextInput
                name="confirmPassword"
                type="password"
                placeholder="Ulangi Kata Sandi"
                onChange={onChange}
                value={dataModal.confirmPassword}
              />
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
