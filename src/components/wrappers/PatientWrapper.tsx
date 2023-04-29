/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../shared/redux/store';
import {
 removeCredentials,
 setCredentials
} from '../../shared/redux/slices/auth.slice';
import { BaseApi } from '../../services/api/api';
import { routes } from '../../config/router.config';

import jwt, { JwtPayload } from 'jsonwebtoken';
import { token } from '../../shared/types/token.types';
import { isValidToken } from '@/shared/utils/jwt';

const PatientWrapper = (Wrapped: any) => {
 return (props: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const localToken = localStorage.getItem('_galileo_tkn');

  if (!token && localToken) dispatch(setCredentials({ token: localToken }));

  
  if (!localToken && !localToken) {
   dispatch(removeCredentials());
   dispatch(BaseApi.util.resetApiState());
   router.replace(routes.login.url);
   return null;
  }
 
  if (
   (localToken && !isValidToken(localToken!)) ||
   (localToken && !isValidToken(localToken))
  ) {
   dispatch(removeCredentials());
   dispatch(BaseApi.util.resetApiState());
   router.replace(routes.login.url);
   return null;
  }
  if (
   (localToken && isValidToken(localToken!)) ||
   (localToken && isValidToken(localToken!))
  ) {
   const decodedToken: any = jwt.decode(token ? token! : localToken!);
   const { role } = decodedToken as JwtPayload & token;
   console.log(role);
   console.log(decodedToken);
   console.log("--------------------");
   if (decodedToken && role != 'PATIENT') {
    router.replace(routes.login.url);
    return null;
   }
  }

  return <Wrapped {...props} />;
 };
};

export default PatientWrapper;
