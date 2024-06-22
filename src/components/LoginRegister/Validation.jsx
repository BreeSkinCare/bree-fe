import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  firstname: Yup.string().required('First Name is required').min(4,'First Name must be at least 4 characters'),
  lastname: Yup.string().required('Last Name is required').min(4,'Last Name must be at least 4 characters'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const changePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().required('Current Password is required'),
  newPassword: Yup.string().min(8, 'New Password must be at least 8 characters').required('New Password is required'),
  confirmationPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match').required('Confirmation Password is required'),
});
