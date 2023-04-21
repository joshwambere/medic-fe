import React, { FC } from 'react';

type AuthPageWrapperType = {
 children: React.ReactNode;
};

const AuthWrapper: FC<AuthPageWrapperType> = ({ children }) => {
 return <div className="auth-wrapper bg-[#FFFFF] w-full h-full justify-center">{children}</div>;
};

export default AuthWrapper;