export const routes = {
 login: {
  name: 'Login',
  url: '/'
 },
 register: {
  name: 'Register',
  url: '/auth/register'
 },
 profile: {
  name: 'Profile',
  url: '/profile'
 },
 dashboard: {
  name: 'Profile',
  url: '/dashboard'
 },
 patient: {
  name: 'Profile',
  url: '/dashboard/treatments'
 },
 consultation: {
  name: 'Profile',
  url: '/dashboard/treatments/[id]'
 },
 medicine: {
  name: 'Profile',
  url: '/dashboard/medicine'
 },
 download: {
  name: 'Profile',
  url: '/dashboard/treatments/download'
 },
 doctor: {
  name: 'Profile',
  url: '/dashboard/doctors'
 },
 prescriptions: {
  name: 'Profile',
  url: '/dashboard/prescriptions'
 }
};