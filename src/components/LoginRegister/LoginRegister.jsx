import React, { useEffect, useState } from 'react';
import * as Components from './Components';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';
import { Button, TextField, Typography, Divider, Link, CircularProgress, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { registerSchema, loginSchema, changePasswordSchema } from './Validation';

const LoginRegister = () => {
  const [signIn, setSignIn] = useState(true);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const { handleRegister, handleLogin, handleChangePassword, loading, error, setError } = useAuth();
  const navigate = useNavigate();

  const formikRegister = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      const success = await handleRegister(values);
      if (success) {
        navigate('/');
      }
    },
  });

  const formikLogin = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const success = await handleLogin(values);
      if (success) {
        navigate('/');
      }
    },
  });

  const formikChangePassword = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmationPassword: '',
    },
    validationSchema: changePasswordSchema,
    onSubmit: async (values) => {
      const success = await handleChangePassword(values);
      if (success) {
        setShowChangePassword(false);
      }
    },
  });

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  };

  const handleFacebookLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/facebook';
  };

  useEffect(() => {
    setError(null);
  }, [signIn, setError]);

  const toggleSignIn = () => {
    setSignIn((prev) => !prev);
  };

  return (
    <Components.Container>
      {showChangePassword ? (
        <Components.ChangePasswordContainer show={showChangePassword}>
          <Components.Form onSubmit={formikChangePassword.handleSubmit}>
            <Typography variant="h4" component="h1" sx={{ fontFamily: 'Raleway', marginBottom: 5 }}>Change Password</Typography>
            <TextField
              size='small'
              name='currentPassword'
              type='password'
              placeholder='Current Password'
              fullWidth
              margin="normal"
              variant="standard"
              value={formikChangePassword.values.currentPassword}
              onChange={formikChangePassword.handleChange}
              onBlur={formikChangePassword.handleBlur}
              error={formikChangePassword.touched.currentPassword && Boolean(formikChangePassword.errors.currentPassword)}
              helperText={formikChangePassword.touched.currentPassword && formikChangePassword.errors.currentPassword}
            />
            <TextField
              size='small'
              name='newPassword'
              type='password'
              placeholder='New Password'
              fullWidth
              margin="normal"
              variant="standard"
              value={formikChangePassword.values.newPassword}
              onChange={formikChangePassword.handleChange}
              onBlur={formikChangePassword.handleBlur}
              error={formikChangePassword.touched.newPassword && Boolean(formikChangePassword.errors.newPassword)}
              helperText={formikChangePassword.touched.newPassword && formikChangePassword.errors.newPassword}
            />
            <TextField
              size='small'
              name='confirmationPassword'
              type='password'
              placeholder='Confirm New Password'
              fullWidth
              margin="normal"
              variant="standard"
              value={formikChangePassword.values.confirmationPassword}
              onChange={formikChangePassword.handleChange}
              onBlur={formikChangePassword.handleBlur}
              error={formikChangePassword.touched.confirmationPassword && Boolean(formikChangePassword.errors.confirmationPassword)}
              helperText={formikChangePassword.touched.confirmationPassword && formikChangePassword.errors.confirmationPassword}
            />
            <Button
              type='submit'
              variant="contained"
              color="primary"
              disabled={loading}
              sx={{
                backgroundColor: '#d9b292',
                '&:hover': {
                  backgroundColor: '#b2806b',
                }, marginBottom: 3
              }} fullWidth
            >
              {loading ? <CircularProgress size={24} /> : 'Change Password'}
            </Button>
            {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
            <Button
              variant="text"
              color="secondary"
              onClick={() => setShowChangePassword(false)}
              sx={{ marginTop: 2 }}
            >
              Back to Login/Register
            </Button>
          </Components.Form>
        </Components.ChangePasswordContainer>
      ) : (
        <>
          <Components.SignUpContainer show={!signIn}>
            <Components.Form onSubmit={formikRegister.handleSubmit}>
              <Typography variant="h4" component="h1" sx={{ fontFamily: 'Tomato Grotesk', fontSize: 22, marginBottom: 5, color: 'black' }}>Create Account</Typography>
              <TextField
                size='small'
                name='firstname'
                type='text'
                placeholder='First Name'
                fullWidth
                margin="normal"
                variant="standard"
                value={formikRegister.values.firstname}
                onChange={formikRegister.handleChange}
                onBlur={formikRegister.handleBlur}
                error={formikRegister.touched.firstname && Boolean(formikRegister.errors.firstname)}
                helperText={formikRegister.touched.firstname && formikRegister.errors.firstname}
              />
              <TextField
                size='small'
                name='lastname'
                type='text'
                placeholder='Last Name'
                fullWidth
                margin="normal"
                variant="standard"
                value={formikRegister.values.lastname}
                onChange={formikRegister.handleChange}
                onBlur={formikRegister.handleBlur}
                error={formikRegister.touched.lastname && Boolean(formikRegister.errors.lastname)}
                helperText={formikRegister.touched.lastname && formikRegister.errors.lastname}
              />
              <TextField
                size='small'
                name='email'
                type='email'
                placeholder='Email'
                fullWidth
                margin="normal"
                variant="standard"
                value={formikRegister.values.email}
                onChange={formikRegister.handleChange}
                onBlur={formikRegister.handleBlur}
                error={formikRegister.touched.email && Boolean(formikRegister.errors.email)}
                helperText={formikRegister.touched.email && formikRegister.errors.email}
              />
              <TextField
                size='small'
                name='password'
                type='password'
                placeholder='Password'
                fullWidth
                margin="normal"
                variant="standard"
                value={formikRegister.values.password}
                onChange={formikRegister.handleChange}
                onBlur={formikRegister.handleBlur}
                error={formikRegister.touched.password && Boolean(formikRegister.errors.password)}
                helperText={formikRegister.touched.password && formikRegister.errors.password}
                sx={{ marginBottom: 5 }}
              />
              <Button type='submit' variant="contained" color="primary" disabled={loading}
                sx={{
                  backgroundColor: '#d9b292',
                  '&:hover': {
                    backgroundColor: '#b2806b',
                  }, marginBottom: 3
                }} fullWidth>
                {loading ? <CircularProgress size={24} /> : 'Sign Up'}
              </Button>
              {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
              <Divider style={{ width: '100%', margin: '20px 0', marginBottom: 30, color: 'black' }}>or use your social account</Divider>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<FaFacebook />}
                onClick={handleFacebookLogin}
                style={{ backgroundColor: '#8193b9', margin: '10px 0' }}
              >
                Continue with Facebook
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                startIcon={<FaGoogle />}
                onClick={handleGoogleLogin}
                style={{ backgroundColor: '#cb645c', margin: '10px 0' }}
              >
                Continue with Google
              </Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer show={signIn}>
            <Components.Form onSubmit={formikLogin.handleSubmit}>
              <Typography variant="h4" component="h1" sx={{ fontFamily: 'Tomato Grotesk', color: 'black' }}>Sign In</Typography>
              <TextField
                name='email'
                type='email'
                placeholder='Email'
                fullWidth
                margin="normal"
                variant="standard"
                value={formikLogin.values.email}
                onChange={formikLogin.handleChange}
                onBlur={formikLogin.handleBlur}
                error={formikLogin.touched.email && Boolean(formikLogin.errors.email)}
                helperText={formikLogin.touched.email && formikLogin.errors.email}
              />
              <TextField
                name='password'
                type='password'
                placeholder='Password'
                fullWidth
                margin="normal"
                variant="standard"
                value={formikLogin.values.password}
                onChange={formikLogin.handleChange}
                onBlur={formikLogin.handleBlur}
                error={formikLogin.touched.password && Boolean(formikLogin.errors.password)}
                helperText={formikLogin.touched.password && formikLogin.errors.password}
              />
              <Link
                href='#'
                underline="hover"
                margin="normal"
                sx={{ fontFamily: 'Raleway', margin: 2, fontSize: 15 }}
                onClick={() => setShowChangePassword(true)}
              >
                Forgot your password?
              </Link>
              <Button
                type='submit'
                variant="contained"
                color="primary"
                disabled={loading}
                fullWidth
                sx={{
                  backgroundColor: '#d9b292',
                  '&:hover': {
                    backgroundColor: '#b2806b',
                  },
                }}
              >
                {loading ? <CircularProgress size={24} sx={{ fontFamily: 'Tomato Grotesk' }} /> : 'Sign In'}
              </Button>
              {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
              <Divider style={{ width: '100%', margin: '55px 0', fontSize: 15, color: 'black' }}>or use your social account</Divider>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<FaFacebook />}
                onClick={handleFacebookLogin}
                style={{ backgroundColor: '#8193b9', margin: '10px 0' }}
              >
                Continue with Facebook
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                startIcon={<FaGoogle />}
                onClick={handleGoogleLogin}
                style={{ backgroundColor: '#cb645c', margin: '10px 0' }}
              >
                Continue with Google
              </Button>
            </Components.Form>
          </Components.SignInContainer>
        </>
      )}
    </Components.Container>
  );
};

export default LoginRegister;
