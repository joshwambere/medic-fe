import { BaseApi } from '../api/api';
import {
 userLogin,
 userLoginResponse,
 UserSignupRequest,
 UserSignupResponse,

} from '../../shared/types/user.types';

const loginEndpoint = BaseApi.injectEndpoints({
 endpoints: builder => ({
  login: builder.mutation<userLoginResponse, userLogin>({
   query: credentials => ({
    url: `auth/login`,
    method: 'POST',
    body: credentials
   }),
   invalidatesTags: ['User']
  }),
  signup: builder.mutation<UserSignupResponse, UserSignupRequest>({
   query: credentials => ({
    url: `auth/signup`,
    method: 'POST',
    body: credentials
   })
  }),
 

 })
});

export const {
 useLoginMutation,
 useSignupMutation,
} = loginEndpoint;