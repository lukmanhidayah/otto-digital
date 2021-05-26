import CheckBox from "../../components/form/CheckBox";
import PrimaryButton from "../../components/form/PrimaryButton";
import TextInput from "../../components/form/TextInput";
import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";

import "./Login.css";

const Login = () => {
  return (
    <div className="screen-container">
      <div className="login-container">
        <div className="login-content">
          <div className="logo-container">
            <div className="flex flex-col items-center justify-center w-full mb-3">
              <span className="p-4 border rounded-full">
                <LogoIcon width={48} height={48} className="stroke-current" />
              </span>
              <h1 className="text-blueGray-500 text-3xl font-bold ml-4 text-blue-850">
                Otto Digital
              </h1>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
