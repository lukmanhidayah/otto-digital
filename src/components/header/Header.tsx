import { ReactComponent as ArrowDownIcon } from "../../assets/svg/icons/arrowDown.svg";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="header">
        {/* logo container */}
        <div className="w-full bg-white py-2 px-4 flex items-center shadow rounded">
          <h1>Senin 14 Mei 2021</h1>
        </div>
        <button className="grid grid-flow-col auto-cols-max gap-x-2 md:gap-x-4 justify-between items-center w-full bg-white py-2 px-4 shadow rounded">
          <div className="flex items-center justify-center p-2 rounded focus:outline-none w-full">
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

            <div className="ml-6 flex flex-col">
              <h4 className="leading-tight text-md">Lukman Hidayah</h4>
            </div>
          </div>
          <div className="right-align">
            <ArrowDownIcon width={18} height={18} />
          </div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
