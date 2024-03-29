export const passwordValidation = [
 {
  required: true,
  message: 'Enter password'
 }
];

export const usernameValidation = [
 {
  required: true,
  message: 'Enter Email',
  pattern:
   /^\s*(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/
 }
];

export const phoneValidation = [
  {
    required: true,
    message: 'Enter Phone Number',
    pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/g
  }
]

export const passwordStrengthValidation = [
 {
  required: true,
  message: 'Password must be at least 8 characters long',
  min: 8
 }
];

export const requiredInput = [
 {
  required: true,
  message: 'This is required'
 }
];
