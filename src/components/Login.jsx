import './SignUpLogin.css'

import email_icon from '/assets/email.png'
import password_icon from '/assets/password.png'
import { useState } from 'react'
import { auth } from '../config'
import { signInWithEmailAndPassword } from 'firebase/auth'

function SignUPLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        setError("");
        e.preventDefault();
        try {
            if (!auth) {
                throw new Error("Authentication service is not initialized.");
            }
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            if (userCredential) {
                alert("User Logged In!!");
                window.location.href = '/Home';
            }
        } catch (err) {
            setError(err.message || "An error occurred during login.");
        }
    };

    return (
        <>
            <div className="container">

                <div className="header">
                    <div className="text">Login</div>
                    <div className="underline"></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        {error && <div style={{ color: 'white', textAlign: 'center', fontSize: '20px', width: 'auto', height: '20px' }}>{error}</div>}
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" placeholder='Email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder='Password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>



                        <div className="submit-container">
                            <button
                                className="submit"
                                type='submit'
                            >
                                Login
                            </button>
                        </div>


                    </div>



                </form>

            </div>
        </>
    )
}
export default SignUPLogin;