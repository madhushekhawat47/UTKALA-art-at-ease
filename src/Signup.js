import React, { useState } from 'react'
import Logo from "./components/assets/images/logo.png"
import { Link } from "react-router-dom"
import { auth } from './firebase'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Signup() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

    }
    return (



        <div className='utkalalogin'>
            <Link to="/">
                <img src={Logo} alt='' className='utkalalogin_logo' />
            </Link>


            <div className='utkalalogin_container'>
                <h1>Create Account</h1>
                <form>
                    <h5>Name</h5>
                    <input type='text' />
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button className='utkalasignin_registerbutton' onClick={register}>Sign-Up</button>

                    <p>Already have an Account?</p>
                    <Link to="/login">
                        <button className='utkalaloginbutton' type="submit" >Sign-In</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Signup
