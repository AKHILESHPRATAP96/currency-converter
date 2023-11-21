import React from 'react'
import SignInForm from './signIn'
import SignUpForm from './signUp'
import ForgotPasswordForm from './fogotPassword'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Authentication() {
    const [isSignIn, setisSignIn] = useState(false)
    let naigate = useNavigate()
    function handlesignInsuccess() {
        setisSignIn(true)
        console.log(isSignIn)
    }
    if (isSignIn) {
        naigate('/convert')
    }


    return (
        <div>
            <SignInForm onSuccess={handlesignInsuccess} />
            <SignUpForm />
            <ForgotPasswordForm />
        </div>
    )
}

export default Authentication