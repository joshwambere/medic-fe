import AuthWrapper from "../wrappers/AuthWrapper";
import { Button, Form } from "antd";
import { TiUserOutline } from "react-icons/ti";
import { FiLock } from "react-icons/fi";
import { RiFacebookLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { ErrorMessage } from "../shared/messages/ErrorMessage";
import { SuccessMessage } from "../shared/messages/SuccessMessage";
import { passwordValidation, requiredInput } from "@/shared/utils/validations/formValidation";
import { useLoginMutation, } from "@/services/endpoints/auth.endpoint";
import { setCredentials } from "@/shared/redux/slices/auth.slice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { routes } from "@/config/router.config";

const Login = (): JSX.Element => {

  const [login, { isLoading: loginLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const onFinish = (values: any) => {
    login({ userName: values?.username, password: values?.password })
      .unwrap()
      .then((res: any) => {
        dispatch(setCredentials({ token: res?.response.payload }));
        SuccessMessage(res.response.message);
        router.replace(routes.dashboard.url);
      })
      .catch((e: any) => {
        if (e.status === "FETCH_ERROR") {
          ErrorMessage("Network Error");
        } else {
          ErrorMessage(e.data ? e.data.message : "Error loging in");
        }
      });
  };

  return (
    <AuthWrapper>
      <Form
        name="Login"
        onFinish={onFinish}
        style={{
          padding: "0 1rem"
        }}
        className="login-form  flex flex-col items-center"
      >
        <div className="lg:px-4 sm:px-2 h-full flex flex-col justify-center form-inputs">
          <div>
            <div className="title-section lg:pb-7 sm:pb-3">
              <div className="flex flex-col pb-2">
                <h2 className="font-light pt-5 opacity-7 text-[#8c98a0] flex items-center">
                  User Login
                  <span className="bg-[#d9e0e5] ml-2 h-0.5 w-7"></span>
                </h2>
                <h1 className="font-bold lg:text-4xl sm:text-2xl capitalize text-[#0d3856] pt-7 pb-3 leading-relaxed">
                  The first wealth is<span className="text-[#2f9393]"> health.</span>
                </h1>
              </div>
            </div>
            <div className="login-divider bg-[#d9e0e5] h-0.5 w-full opacity-3 mb-4"></div>
          </div>
          <div className="w-full items-center lg:pt-8 xs:pt-4">
            <div className="group-input flex flex-col py-2">
              <label htmlFor="email" className="text-[#8c98a0]">
                Email / username
              </label>
              <div
                className="flex relative items-center bg-[#f1f6fa] rounded-3xl px-4 lg:py-2 sm:py-1 focus:bg-white input-group mt-2">
                <TiUserOutline color="#8c98a0" size="20" />
                <Form.Item
                  name="username"
                  rules={requiredInput}
                  style={{ margin: 0 }}
                >
                  <input
                    className="bg-transparent w-full outline-none pl-2 login-input"
                    id="email"
                    name="username"
                    autoComplete="off"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="group-input flex flex-col py-2">
              <label htmlFor="password" className="text-[#8c98a0] pt-4">
                Password
              </label>
              <div
                className=" relative flex items-center bg-[#f1f6fa] rounded-3xl px-4 lg:py-2 sm:py-1 focus:bg-white input-group mt-2">
                <FiLock color="#8c98a0" />

                <Form.Item
                  name="password"
                  rules={passwordValidation}
                  style={{ margin: 0 }}
                >
                  <input
                    className="bg-transparent w-full outline-none pl-2 login-input"
                    type="password"
                    id="password"
                    name="password"
                  />
                </Form.Item>
              </div>
            </div>

            <Button
              loading={loginLoading}
              htmlType="submit"
              className="btn_dark_red bg-[#730ac0] text-[#fff] px-4 py-3 font-bold text-lg tracking-widest rounded-3xl w-full mt-5"
            >
              Sign in
            </Button>
          </div>
          <div className="pt-4">
            <span>Dont have an account?</span>
            <span
              className="text-[#730ac0] ml-2 font-bold hover:cursor-pointer hover:underline"
              onClick={() => router.replace(routes.register.url)}
            >
       Sign up
      </span>
          </div>
        </div>

        <div className=" flex pt-3 w-full px-3 items-center justify-center bg-[#730ac0] self-end bottom-section ">
          <span className=" h-0.5 bg-[#d9e0e5] w-1/4 mr-3"></span>
          <RiFacebookLine className="text-[#d9e0e5] text-lg mx-1" />
          <BsInstagram className="text-[#d9e0e5] text-md mx-1" />
          <span className=" h-0.5 bg-[#d9e0e5] w-1/4 ml-3"></span>
        </div>
      </Form>
    </AuthWrapper>
  );
};

export default Login;