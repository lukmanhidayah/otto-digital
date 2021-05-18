import { useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as ArrowDownIcon } from "../../assets/svg/icons/arrowDown.svg";
import { ReactComponent as MenuIcon } from "../../assets/svg/icons/menu.svg";
import { toggleNavBar } from "../../redux/utils/utilsAction";
import TextInput from "../form/TextInput";
import ModalApp from "../modal/ModalApp";

import "./Header.css";

const Header = () => {
  const [isHideUserMenu, setIsHideUserMenu] = useState(true);
  const [isModalShow, setIsModalShow] = useState(false);
  const [isModalCompany, setIsModalCompany] = useState(false);

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

  const onToggleModalCompany = () =>
    setIsModalCompany((prevState) => !prevState);
  const onChange = (e: { target: { name: string; value: any } }) => {
    const { name, value } = e.target;
    console.log(value);
    setDataModal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onChangeCompany = (e: { target: { name: string; value: any } }) => {
    const { name, value } = e.target;
    console.log(value);
    setDataModalCompany((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
                onChange={onChangeCompany}
                value={dataModal.oldPassword}
              />
              <TextInput
                name="newPassword"
                type="password"
                placeholder="Kata Sandi Baru"
                onChange={onChangeCompany}
                value={dataModal.newPassword}
              />
              <TextInput
                name="confirmPassword"
                type="password"
                placeholder="Ulangi Kata Sandi"
                onChange={onChangeCompany}
                value={dataModal.confirmPassword}
              />
            </div>
          </>
        </ModalApp>
      )}
      {/* end of modal change profile */}

      {/* modal change company */}
      {isModalCompany && (
        <ModalApp
          onToggleModal={onToggleModalCompany}
          title="Ubah data perusahaan"
        >
          <>
            <TextInput
              name="name"
              type="text"
              onChange={onChange}
              placeholder="Nama Pengguna"
              value={dataModalCompany.name}
            />
            <TextInput
              name="phoneNumber"
              type="text"
              placeholder="Nomor Telepon"
              onChange={onChange}
              min={1}
              value={dataModalCompany.phoneNumber}
            />
            <TextInput
              name="photo"
              accept="image/*"
              type="file"
              onChange={onChange}
              placeholder="Foto Pengguna"
              value={dataModalCompany.photo}
            />
          </>
        </ModalApp>
      )}
      {/* end of change modal company */}

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
                <div onClick={onToggleModal} className="user-menu">
                  Ubah profile
                </div>
              </li>
              <li>
                <div onClick={onToggleModalCompany} className="user-menu">
                  Ubah data perusahaan
                </div>
              </li>
              <li>
                <div className="user-menu">keluar</div>
              </li>
            </ul>
          </div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
