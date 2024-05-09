'use client'
import React, { useState } from "react";
import '@styles/common/auth/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Link from "next/link";
import { useRouter } from 'next/navigation';

// Define the Login component
const Login = () => {
    // Define state variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [emailError, setEmailError] = useState('');
    
    // Get the router instance
    const router = useRouter();

    // Define the handleSubmit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (validateForm()) {
                // Sign in with email and password
                const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
                // If user successfully logged in
                if (userCredential) {
                    // Redirect to home page
                    router.push('/');
                }
            }
        } catch (error) {
            alert(error.message);
        }
    }

    // Function to validate email
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to handle email blur event
    const handleEmailBlur = () => {
        if (!validateEmail(email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    }

    // Function to validate form
    const validateForm = () => {
        let isValid = true;

        // Email validation
        if (!email || !validateEmail(email)) {
            setEmailError('Invalid email address');
            isValid = false;
        } else {
            setEmailError('');
        }

        return isValid;
    }
    const handleGoogleSignIn = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const userCredential = await firebase.auth().signInWithPopup(provider);
            // If userCredential is available
            if (userCredential) {
                // Extract relevant user information
                // const { email, displayName, photoURL } = userCredential.user;
               
                // dispatch(loginUser({ email, displayName, photoURL }));
                router.push('/');
            } else {
                // Handle the case when userCredential is not available
                alert("User credential not available");
            }
        } catch (err) {
            alert(err.message);
        }
    }
    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    // Return the JSX for the Login component
    return (
        <div className="login">
            <div className="login-container">
                <div className="login-heading"><h1>Login to Your Account</h1></div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="Email">
                        <input type="email" placeholder="Enter email" required autoComplete="off" name="email" className={`email-holder ${emailError ? 'error' : ''}`} value={email} onChange={(e) => setEmail(e.target.value)} onBlur={handleEmailBlur}/>
                        {emailError && <div className="error-message">{emailError}</div>}
                    </div>
                    <div className="Password">
                        <div className="password-input">
                            <div><input type={showPassword ? "text" : "password"} placeholder="Enter password" required autoComplete="off" name="password" className="password-holder" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span className="password-toggle" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="login-button">
                        <button className="signup-btn" type="submit">Login</button>
                    </div>
                    <div className="divider"></div>
                    <div className="google-signin">
                        <button type="button" className="login-with-google-btn" onClick={handleGoogleSignIn}>Login with Google</button>
                    </div>
                    <p>Don't have an account? <Link href="/signup"> Signup</Link></p>
                </form>
            </div>
        </div>
    );
}

// Export the Login component
export default Login;
