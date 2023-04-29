export interface userLogin {
 userName: string;
 password: string;
}

export interface userLoginResponse {
 response: response;
}

interface response{
 message: string;
 payload: any;
}
export interface opsGetDoctorsResponse {
  response: response;
}

export interface grantAccessResponse {
 response: response;
}

export interface grantAccessRequest {
 id: string;
 symptoms: string;
}

export interface physicianConsult{
 patientId: string;
 physicianId: string;
 diagnosis: string;
}


export type UserSignupResponse = {
 message: string;
 response: response;
};

export type UserSignupRequest = {
 name: string;
 email: string;
 userName: string;
 role: string;
 gender: string;
 password: string;
 phone: string;
 age: number;
};

export type UserVerifyRequest = {
 otp: string;
};
export type UserVerifyResponse = {
 data?: any;
 message: string;
};

export type userProfileResponse = {
 success: boolean;
 message: string;
};

export type userProfileRequest = {
 userName: string;
 profileImage: string;
};

export type forgotPasswordResponse = {
 message: string;
 data?: any;
};
export type forgotPasswordRequest = {
 email: string;
};

export type resetPasswordResponse = {
 message: string;
 success: boolean;
};
export type resetPasswordRequest = {
 password: string;
 token: string;
};
