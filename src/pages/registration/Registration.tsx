import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full py-4 md:w-6/12 lg:w-5/12 px-20 md:px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0 bg-white">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h1 className="text-blueGray-500 text-lg font-bold">Logo</h1>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <div className="relative w-full mb-3">
                <label
                  className="block text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="company"
                >
                  Nama Perusahaan
                </label>
                <input
                  type="text"
                  id="company"
                  className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border-gray-200 focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="PT. Contoh Perusahaan"
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Nama Pengguna
                </label>
                <input
                  type="text"
                  className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border-gray-200 focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Nama Pengguna"
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border-gray-200 focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border-gray-200 focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Confirmation Password
                </label>
                <input
                  type="password"
                  className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border-gray-200 focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Confirmation Password"
                />
              </div>

              <div className="text-center mt-6">
                <button
                  className="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                >
                  Masuk
                </button>
              </div>
            </form>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-full text-left">
                <small>
                  Sudah memiliki akun?{" "}
                  <Link to="/login" className="text-blue-800">
                    Masuk disini
                  </Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
