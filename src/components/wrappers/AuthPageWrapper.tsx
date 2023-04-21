import React, { FC } from 'react';
import Image from "next/image";
import DoctorImage from "../../../public/assets/Doc.png";

type AuthPageWrapperType = {
  children: React.ReactNode;
};

const AuthWrapper: FC<AuthPageWrapperType> = ({ children }) => {
  return (
    <main className="flex w-full h-screen items-center justify-between py-4 px-8">
      <div className=" w-2/3 flex items-center justify-between px-2">

        <div className="w-3/5 text-section">
          <h1 className="text-8xl font-bold font-upper-case">
            Medical care
          </h1>
          <p className='font-bold pt-2'>Our Commitment</p>
          <p className=''>Is To ensure your family is kept healthy and strong</p>
        </div>

        {/*
      doctor and patient image
    */}
        <div className="w-3/5 Image-section  float-right">
          <Image src={DoctorImage} alt="Doctor Image" />
        </div>
      </div>
      <div className="w-1/3 h-full">{children}</div>
    </main>
  )
};

export default AuthWrapper;