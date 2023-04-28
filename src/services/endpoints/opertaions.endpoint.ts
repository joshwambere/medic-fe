import { BaseApi } from '../api/api';
import {
 opsGetDoctorsResponse, grantAccessRequest, grantAccessResponse
} from '../../shared/types/user.types';
import { headers } from 'next/dist/client/components/headers';

const operationsEndpoint = BaseApi.injectEndpoints({

 endpoints: builder => ({
  getDoctors: builder.query<opsGetDoctorsResponse, void>({
   query: credentials => ({
    url: `ops/physician`,
    method: 'GET',
    body: credentials,
    headers:{Authorization: `${localStorage.getItem('_galileo_tkn')}`}
   })
  }),
  getPharmacists: builder.query<opsGetDoctorsResponse, void>({
   query: credentials => ({
    url: `ops/pharmacist`,
    method: 'GET',
    body: credentials,
    headers: { Authorization: `${localStorage.getItem('_galileo_tkn')}` }
   })
  }),
  grantAccess: builder.mutation<grantAccessResponse, grantAccessRequest>({
   query: credentials => ({
    url: `ops/patient/grantPermission`,
    method: 'POST',
    body: credentials,
    headers: { Authorization: `${localStorage.getItem('_galileo_tkn')}` }
   })
  }),
 })


});

export const {
 useGetDoctorsQuery,
 useGetPharmacistsQuery,
 useGrantAccessMutation
} = operationsEndpoint;