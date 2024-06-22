import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const OAuth2RedirectHandler = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { setUser } = useAuth();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');

        if (token) {
            // Assuming the token contains the user data
            setUser({ token });
            navigate('/'); // Redirect to home page after successful login
        } else {
            // Handle error
            navigate('/login');
        }
    }, [location, navigate, setUser]);

    return <div>Loading...</div>;
};

export default OAuth2RedirectHandler;
