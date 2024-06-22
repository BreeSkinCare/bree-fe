// useAuth.js
import { useState } from 'react';
import axios from '../api/axios'; // Import the custom axios instance

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (registerData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/auth/register', registerData);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'Registration failed');
      return false; // Indicate failure
    }
  };

  const handleLogin = async (loginData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/auth/authenticate', loginData);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'Wrong Email or Password');
      return false; // Indicate failure
    }
  };

  const handleChangePassword = async (passwordData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.patch('/users/change-password', passwordData);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'Password change failed');
      return false; // Indicate failure
    }
  };

  return {
    handleRegister,
    handleLogin,
    handleChangePassword,
    loading,
    error,
    setError, // Expose setError to manually clear errors
  };
};
