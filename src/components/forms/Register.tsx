import AuthWrapper from "../wrappers/AuthWrapper";
import { TiUserOutline } from "react-icons/ti";
import { FiLock, FiUserCheck } from "react-icons/fi";
import { RiFacebookLine } from "react-icons/ri";
import { BsInstagram, BsFillTelephoneInboundFill, BsGenderAmbiguous } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { HiOutlineIdentification } from "react-icons/hi";
import { useSignupMutation } from "@/services/endpoints/auth.endpoint";
import { Button, Form } from "antd";
import {
  passwordStrengthValidation,
  requiredInput,
  usernameValidation,
  phoneValidation
} from "@/shared/utils/validations/formValidation";
import { SuccessMessage } from "../shared/messages/SuccessMessage";
import { ErrorMessage } from "../shared/messages/ErrorMessage";
import React from "react";
import { routes } from "@/config/router.config";
import { useRouter } from "next/router";

const Register = (): JSX.Element => {
  const [signup, { isLoading: signupLoading }] = useSignupMutation();
  const [profileImage, setProfileImage] = React.useState<string>("");
  const router = useRouter();


  const onFinish = async (data: any) => {
    console.log(data);
    signup({
      name: data?.name,
      userName: data?.username,
      email: data?.email,
      role: data?.role,
      password: data?.password,
      phone: data?.phone,
      gender: data?.gender,
      age: parseInt(data?.age),
    })
      .unwrap()
      .then((res: any) => {
        SuccessMessage(res.response.message);
        router.replace(routes.login.url);
      })
      .catch((err: any) => {
        console.log(err);
        ErrorMessage(err.data ? err.data.message : "Error signing up");
      });
  };
  return (
    <AuthWrapper>
      <div className="register-form  flex flex-col">
        <div
          className=" h-full flex flex-col justify-center xl:form-inputs sm:form-inputs-small lg:mb-6">
          <div>
            <div className="title-section  sm:pb-2">
              <div className="flex flex-col pb-2">
                <h2 className="font-light  opacity-7 text-[#8c98a0] flex items-center">
                  User Register
                  <span className="bg-[#d9e0e5] ml-2 h-0.5 w-7"></span>
                </h2>
                <h1 className="font-bold lg:text-4xl sm:text-2xl capitalize text-[#0d3856] pt-7 pb-3 leading-relaxed">
                  Join us And make a difference
                </h1>
              </div>
            </div>
            <div className="login-divider bg-[#d9e0e5] h-0.5 w-full opacity-3 mb-4"></div>
          </div>
          <Form
            onFinish={onFinish}
            style={{
              padding: "0 1rem"
            }}
            className="w-full items-center lg:pt-4 sm:pt-2 flex-col"
          >
            <div className="flex double-group pt-2 w-full gap-4">
              <div className="group-input flex flex-col py-2 w-1/2">
                <label htmlFor="email" className="text-[#8c98a0]">
                  Name
                </label>
                <div className="flex items-center bg-[#f1f6fa] rounded-3xl px-4 py-1 focus:bg-white input-group mt-2">
                  <TiUserOutline color="#8c98a0" size="20" />
                  <Form.Item
                    name="name"
                    rules={requiredInput}
                    style={{ margin: 0 }}
                  >
                    <input
                      className="bg-transparent w-full outline-none pl-2 login-input"
                      type="text"
                      id="email"
                      name="email"
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="group-input flex flex-col py-2 w-1/2 ">
                <label htmlFor="username" className="text-[#8c98a0]">
                  Username
                </label>
                <div className="flex items-center bg-[#f1f6fa] rounded-3xl px-4 py-1 focus:bg-white input-group mt-2">
                  <FiUserCheck color="#8c98a0" size="20" />
                  <Form.Item
                    name="username"
                    rules={requiredInput}
                    style={{ margin: 0 }}
                  >
                    <input
                      className="bg-transparent w-full outline-none pl-2 login-input"
                      type="text"
                      id="email"
                      name="username"
                    />
                  </Form.Item>
                </div>
              </div>
            </div>

            <div className="flex double-group pt-2 w-full gap-4">
              <div className="group-input flex flex-col py-2 w-1/2">
                <label htmlFor="email" className="text-[#8c98a0]">
                  Email
                </label>
                <div className="flex items-center bg-[#f1f6fa] rounded-3xl px-4 py-1 focus:bg-white input-group mt-2">
                  <MdOutlineAlternateEmail color="#8c98a0" size="20" />
                  <Form.Item
                    name="email"
                    rules={usernameValidation}
                    style={{ margin: 0 }}
                  >
                    <input
                      className="bg-transparent w-full outline-none pl-2 login-input"
                      type="email"
                      id="email"
                      name="email"
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="group-input flex flex-col py-2 w-1/2">
                <label htmlFor="email" className="text-[#8c98a0]">
                  Phone
                </label>
                <div className="flex items-center bg-[#f1f6fa] rounded-3xl px-4 py-1 focus:bg-white input-group mt-2">
                  <BsFillTelephoneInboundFill color="#8c98a0" size="20" />
                  <Form.Item
                    name="phone"
                    rules={phoneValidation}
                    style={{ margin: 0 }}
                  >
                    <input
                      className="bg-transparent w-full outline-none pl-2 login-input"
                      type="text"
                      id="phone"
                      name="phone"
                    />
                  </Form.Item>
                </div>
              </div>
            </div>

            <div className="flex double-group pt-2 w-full gap-4">
              <div className="group-input flex flex-col py-2 w-1/2">
                <label htmlFor="emp" className="text-[#8c98a0]">
                  Gender
                </label>
                <div className="flex items-center bg-[#f1f6fa] rounded-3xl px-4 py-1 focus:bg-white input-group mt-2">
                  <BsGenderAmbiguous color="#8c98a0" size="20" />
                  <Form.Item
                    name="gender"
                    rules={requiredInput}
                    style={{ margin: 0 }}
                  >
                    <select
                      className="bg-transparent w-full outline-none pl-2 login-input"
                      id="gender"
                      name="gender"
                    >
                      <option>MALE</option>
                      <option>FEMALE</option>
                    </select>
                  </Form.Item>
                </div>
              </div>
              <div className="group-input flex flex-col py-2 w-1/2 ">
                <label htmlFor="email" className="text-[#8c98a0]">
                  Password
                </label>
                <div className="flex items-center bg-[#f1f6fa] rounded-3xl px-4 py-1 focus:bg-white input-group mt-2">
                  <FiLock color="#8c98a0" />
                  <Form.Item
                    name="password"
                    rules={requiredInput}
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
            </div>

            <div className="flex double-group pt-2 w-full gap-4">
              <div className=" flex flex-col py-2 w-1/2">
                <label htmlFor="emp" className="text-[#8c98a0]">
                  Role
                </label>
                <div className="flex items-center bg-[#f1f6fa] rounded-3xl px-4 py-1 focus:bg-white input-group mt-2">
                  <HiOutlineIdentification color="#8c98a0" size="20" />
                  <Form.Item
                    name="role"
                    rules={requiredInput}
                    style={{ margin: 0 }}
                  >
                    <select
                      className="bg-transparent w-full outline-none pl-2 login-input"

                      id="role"
                      name="role"
                    >
                      <option>PATIENT</option>
                      <option>PHYISICIAN</option>
                      <option>PHARMACIST</option>
                    </select>
                  </Form.Item>
                </div>
              </div>

              <div className=" flex flex-col py-2 w-1/2">
                <label htmlFor="emp" className="text-[#8c98a0]">
                  Role
                </label>
                <div className="flex items-center bg-[#f1f6fa] rounded-3xl px-4 py-1 focus:bg-white input-group mt-2">
                  <HiOutlineIdentification color="#8c98a0" size="20" />
                  <Form.Item
                    name="age"
                    rules={requiredInput}
                    style={{ margin: 0 }}
                  >
                    <input
                      className="bg-transparent w-full outline-none pl-2 login-input"
                      type="number"
                      id="age"
                      name="age"
                    />
                      
                  </Form.Item>
                </div>
              </div>
            </div>

            <Button
              className="btn_dark_red bg-[#730ac0] text-[#fff] px-4 py-3 font-bold text-lg tracking-widest rounded-3xl w-full mt-5"
              htmlType="submit"
              loading={signupLoading}
            >
              Register
            </Button>
          </Form>
          <div className="pt-4">
            <span>Already have an account?</span>
            <span
              className="text-[#730ac0] ml-2 font-bold  hover:cursor-pointer"
              onClick={() => router.replace(routes.login.url)}
            >
              Login
            </span>
          </div>
        </div>

        <div
          className=" md:bottom-section-small flex pt-3 w-full px-3 items-center justify-center bg-[#730ac0] self-end bottom-section ">
          <span className=" h-0.5 bg-[#d9e0e5] w-1/4 mr-3"></span>
          <RiFacebookLine className="text-[#d9e0e5] text-lg mx-1 hover:cursor-pointer" />
          <BsInstagram className="text-[#d9e0e5] text-md mx-1 hover:cursor-pointer" />
          <span className=" h-0.5 bg-[#d9e0e5] w-1/4 ml-3"></span>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Register;
