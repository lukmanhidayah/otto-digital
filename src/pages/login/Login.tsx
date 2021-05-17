import { Link } from "react-router-dom";
import CheckBox from "../../components/form/CheckBox";
import PrimaryButton from "../../components/form/PrimaryButton";
import TextInput from "../../components/form/TextInput";

import "./Login.css";

const Login = () => {
  return (
    <div className="screen-container">
      <div className="login-container">
        <div className="login-content">
          <div className="logo-container">
            <div className="text-center mb-3">
              <h1 className="text-blueGray-500 text-lg font-bold">Logo</h1>
            </div>
            <hr className="underline" />
          </div>
          <div className="form-container">
            <form>
              <TextInput name="email" type="email" placeholder="Email" />
              <TextInput
                name="password"
                type="password"
                placeholder="Password"
              />
              <CheckBox />
              <PrimaryButton title={"Masuk"} />
            </form>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-full text-left">
                <small>
                  Belum memiliki akun?{" "}
                  <Link to="/registration" className="text-blue-800">
                    Daftar disini
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

export default Login;
