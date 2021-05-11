import { ReactComponent as NotificationIcon } from "../../assets/svg/icons/notifications.svg";
import { ReactComponent as MessageIcon } from "../../assets/svg/icons/message.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/icons/search.svg";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="header">
        {/* logo container */}
        <div className="w-1/2 md:w-1/6">Logo</div>

        {/* search container */}
        <div className="hidden md:block md:w-2/6 pl-2 ">
          <div className="relative flex-col items-center">
            <input
              type="search"
              className="bg-gray-50 p-2 pl-10 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
              placeholder="Search"
            />
            <div className="absolute top-3 left-2">
              <SearchIcon width={18} height={18} />
            </div>
          </div>
        </div>
        <div className="grid grid-flow-col auto-cols-max gap-x-2 md:gap-x-4  justify-end items-center w-1/2 md:w-3/6 ">
          <button className="p-3 rounded-full focus:outline-none hover:bg-gray-100">
            <MessageIcon width={20} height={20} />
          </button>
          <button className="p-3 rounded-full focus:outline-none hover:bg-gray-100">
            <NotificationIcon width={20} height={20} />
          </button>
          <button className="flex items-center p-2 rounded focus:outline-none hover:bg-gray-100">
            <div
              className="rounded-full overflow-hidden"
              style={{
                width: 40,
                height: 40,
              }}
            >
              <img
                src="https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=6&m=1009749608&s=612x612&w=0&h=ckLkBgedCLmhG-TBvm48s6pc8kBfHt7Ppec13IgA6bo="
                alt="profile"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="ml-2 flex flex-col">
              <h4 className="leading-tight text-sm">Lukman</h4>
              <span className="text-xs font-light">Admin Chatbot</span>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
