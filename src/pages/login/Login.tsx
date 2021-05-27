import CheckBox from "../../components/form/CheckBox";
import PrimaryButton from "../../components/form/PrimaryButton";
import TextInput from "../../components/form/TextInput";
import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";

import "./Login.css";
import { useState } from "react";
import IsNullOrEmpty from "../../utils/IsNullOrEmpty";
import URL from "../../constants/URL";
import Spinner from "../../assets/svg/spinner/Spinner";
import { useDispatch } from "react-redux";
import { login } from "../../redux/user/userAction";
import ErrorMessage from "../../components/modal/ErrorMessage";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });

  const [isNull, setIsNull] = useState(false);
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setIsNull(false);
    setIsError(false);
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
          if (!IsNullOrEmpty(result.data)) {
            dispatch(login(result.data));
          } else {
            setIsError(true);
          }
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
          setIsError(true);
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

  const hideErrorMessage = () => {
    setIsError(false);
  };

  return (
    <div className="screen-container">
      {isError && (
        <ErrorMessage
          pressClose={hideErrorMessage}
          title="Login Error"
          description="Username or password failed, please try again."
        />
      )}
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
            <form onSubmit={onSubmit}>
              <TextInput
                name="username"
                type="username"
                value={dataLogin.username}
                placeholder="Username"
                onChange={onChange}
                isNull={isNull && dataLogin.username === ""}
              />
              <TextInput
                onChange={onChange}
                value={dataLogin.password}
                name="password"
                type="password"
                placeholder="Password"
                isNull={isNull && dataLogin.password === ""}
              />
              <CheckBox />
              <PrimaryButton
                type="submit"
                // onClick={() => {
                //   !isLoading && onSubmit();
                // }}
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
