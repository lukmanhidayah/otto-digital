import CheckBox from "../../components/form/CheckBox";
import PrimaryButton from "../../components/form/PrimaryButton";
import TextInput from "../../components/form/TextInput";
import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";

import "./Login.css";
import { useState } from "react";
import IsNullOrEmpty from "../../utils/IsNullOrEmpty";
import URL from "../../constants/URL";
import Spinner from "../../assets/svg/spinner/Spinner";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });

  const [isNull, setIsNull] = useState(false);

  const onSubmit = () => {
    setIsLoading(true);
    setIsNull(false);
    if (
      !IsNullOrEmpty(dataLogin.username) &&
      !IsNullOrEmpty(dataLogin.password)
    ) {
      fetch(
        `${URL.BASE_URL}login?username=${dataLogin.username}&password=${dataLogin.password}`,
        {
          method: "GET",
          redirect: "follow",
        }
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result.data);
          // if (result.code === 200) {
          //   setDataDashboard({
          //     total: result.data.total,
          //     user: result.data.user,
          //   });
          // }
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log("error", error);
        });
    } else {
      setIsNull(true);
      setIsLoading(false);
    }
  };

  const onChange = (e: { target: { name: string; value: any } }) => {
    const { name, value } = e.target;
    setDataLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
              <TextInput
                name="username"
                type="username"
                value={dataLogin.username}
                placeholder="Username"
                onChange={onChange}
                className={
                  isNull && dataLogin.username === "" ? "border-red-300" : ""
                }
              />
              <TextInput
                onChange={onChange}
                value={dataLogin.password}
                name="password"
                type="password"
                placeholder="Password"
                className={
                  isNull && dataLogin.password === "" ? "border-red-300" : ""
                }
              />
              <CheckBox />
              <PrimaryButton
                onClick={() => {
                  !isLoading && onSubmit();
                }}
                title={isLoading ? <Spinner /> : "Login"}
                disabled={isLoading}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
