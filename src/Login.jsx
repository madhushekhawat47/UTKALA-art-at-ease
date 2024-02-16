import React, { useState } from 'react'
import "./Login.css"
import Logo from "./components/assets/images/logo.png"
import { Link } from "react-router-dom"
import { auth } from './firebase'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))

    }


    // const register = e => {
    //     e.preventDefault();
    //     auth
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((auth) => {
    //             console.log(auth);
    //             if(auth)
    //             {
    //                 history.push('/')
    //             }
    //         })
    //         .catch(error => alert(error.message))

    // }

    return (
        <div className='utkalalogin'>
            <Link to="/">
                <img src={Logo} alt='' className='utkalalogin_logo' />
            </Link>

            <div className='utkalalogin_container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button className='utkalasignin_registerbutton' onClick={signIn}>Sign-In</button>

                    <p>Not a Member yet?</p>
                    <Link to="/Signup">
                        <button className='utkalaloginbutton' type="submit" >Sign-Up</button>
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default Login
