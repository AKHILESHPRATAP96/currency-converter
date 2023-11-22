import React, { useState, useEffect } from 'react';
import SignInForm from './signIn';
import { useNavigate } from 'react-router-dom';

function Authentication() {
    const [isSignIn, setisSignIn] = useState(false);
    const navigate = useNavigate();

    function handleSignInSuccess() {
        setisSignIn(true);
    }

    useEffect(() => {

        if (isSignIn) {
            navigate('/convert');
        }
    }, [isSignIn, navigate]);

    return (
        <div>
            <SignInForm onSuccess={handleSignInSuccess} />
        </div>
    );
}

export default Authentication;
