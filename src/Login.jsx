import React, { useState } from 'react'
import "./Login.css"
import Logo from "./components/assets/images/logo.png"
import { Link } from "react-router-dom"
import { auth } from './firebase'
import {GoogleAuthProvider,signInWithPopup,signOut} from 'firebase/auth';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
// import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import {ToastContainer,toast} from "react-toastify";

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
    const provider=new GoogleAuthProvider();

    const handleGoogleLogin =(e)=>{
             e.preventDefault()
             signInWithPopup(auth,provider).then((result)=>{
                const  user= result.user;
                console.log(user);
             }).catch((error)=>{
                console.log(error);
             })
             
    }
    const handleSignOut =()=>{
        signOut(auth)
        .then(()=>{
            toast.success("Log Out SuccessFully!");
            

        })
        .catch((error)=>{
            console.log(error);
        })
      
        
}

    return (
        <div className='utkalalogin'>
            <Link to="/">
                <img src={Logo} alt='' className='utkalalogin_logo' />
            </Link>

            <div className='utkalalogin_container'>
                <h1 class="signin">Sign In</h1>
                <form class="text">
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button className='utkalasignin_registerbutton' onClick={signIn}>Sign-In</button>

                    <p>Not a Member yet?</p>
                    <Link to="/Signup">
                        <button className='utkalaloginbutton' type="submit" >Sign-Up</button>
                    </Link>
                    <div className="sign">
                        <button className="google"onClick={handleGoogleLogin}><i class="fa-brands fa-google"></i></button>
                        <button className='signout' onClick={handleSignOut}>Sign Out</button>
                    </div>
                </form>
                
            </div>

           <ToastContainer
            position='top-left'
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark" />
        </div>
        
    )
}

export default Login;
