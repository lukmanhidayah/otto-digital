import { Link } from "react-router-dom";
import PrimaryButton from "../../components/form/PrimaryButton";
import TextInput from "../../components/form/TextInput";

import "./Registration.css";

const Registration = () => {
  return (
    <div className="w-full min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="w-full py-4 md:w-6/12 lg:w-5/12 px-20 md:px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0 bg-white">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h1 className="text-blueGray-500 text-lg font-bold">Logo</h1>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div className="form-container">
            <form>
              <TextInput
                type="text"
                name="company"
                placeholder="Nama Perusahaan"
              />

              <TextInput
                type="text"
                name="username"
                placeholder="Nama Pengguna"
              />

              <TextInput name="email" type="email" placeholder="Email" />
              <TextInput
                name="password"
                type="password"
                placeholder="Password"
              />
              <TextInput
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />

              <PrimaryButton title="Daftar" />
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
