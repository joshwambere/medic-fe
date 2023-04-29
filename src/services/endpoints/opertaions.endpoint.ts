import { BaseApi } from '../api/api';
import {
 opsGetDoctorsResponse, grantAccessRequest, grantAccessResponse, physicianConsult
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

  getConsultations: builder.query<opsGetDoctorsResponse, void>({
   query: credentials => ({
    url: `ops/patient/consultation`,
    method: 'GET',
    body: credentials,
    headers: { Authorization: `${localStorage.getItem('_galileo_tkn')}` }
   })
  }),

  getConsultation: builder.mutation<grantAccessResponse, string>({
   query: credentials => ({
    url: `ops/patient/consultation/${credentials}`,
    method: 'GET',
    body: credentials,
    headers: { Authorization: `${localStorage.getItem('_galileo_tkn')}` }
   })
  }),
  getPatients: builder.query<opsGetDoctorsResponse, void>({
   query: credentials => ({
    url: `ops/patient`,
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

  consultation: builder.mutation<grantAccessResponse, physicianConsult>({
   query: credentials => ({
    url: `ops/physician/consultation`,
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
 useGetConsultationsQuery,
 useGetConsultationMutation,
 useGetPatientsQuery,
 useConsultationMutation,
 useGrantAccessMutation
} = operationsEndpoint;