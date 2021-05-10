import { ReactComponent as NotificationIcon } from "../../assets/svg/icons/notifications.svg";
import { ReactComponent as MessageIcon } from "../../assets/svg/icons/message.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/icons/search.svg";

const Header = () => {
  return (
    <header>
      <nav className="flex w-full py-4 px-4 items-center shadow bg-white">
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
        <div className="grid grid-flow-col auto-cols-max gap-x-4 md:gap-x-8  justify-end items-center w-1/2 md:w-3/6 ">
          <div>
            <MessageIcon />
          </div>
          <div>
            <NotificationIcon />
          </div>
          <div className="flex items-center">
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
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
