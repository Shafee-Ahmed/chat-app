import './SignUpLogin.css'

import user_icon from '/assets/person.png'
import email_icon from '/assets/email.png'
import password_icon from '/assets/password.png'
import { useState } from 'react'
import { auth } from '../config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        setError("");
        e.preventDefault();
        try {
            if (!email || !password || !username) {
                setError("All fields are required!");
                return;
            }
            await createUserWithEmailAndPassword(auth, email, password);
            window.location.href = '/Login';
            alert("User Created!!")
        } catch (err) {
            setError(err)
        }

    };

    return (
        <>
            <div className="main-body">
                <div className="container">
                    <div className="header">
                        <div className="text ">Sign Up</div>
                        <div className="underline"></div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            {error && <div style={{ color: 'white', textAlign: 'center', fontSize: '15px', width: 'auto', height: '20px' }}>{error}</div>}
                            <div className="input">
                                <img src={user_icon} alt="" />
                                <input type="text" placeholder='User Name'
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}

                                />
                            </div>

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
                            <div>
                                <span className='forgot-password'>Already Have an Account ? <a href="/Login" >Login</a></span>
                            </div>
                            <div className="submit-container">
                                <button
                                    className="Sign Up submit"
                                    type='submit'
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}
export default SignUp;