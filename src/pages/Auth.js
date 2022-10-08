import React from 'react';
import { signInWithGoogle } from './Firebase';
import Navbar from '../components/Navbar';
import logo from '../logoW.png'
const Auth = () => {
    return (
        <div>
            <center>
                <Navbar/>
                <br/>
                <br/>
                <br/>
                <img src={logo}></img>
                <br/>
                <br/>
                <h1 className='wlc-txt'>Let's get you started with managing your Time efficiently!</h1>
                <br/>
                <br/>
           <button onClick={signInWithGoogle} className="login-with-google-btn">Get Started With Google</button>
           </center>
       </div>
    );
};

export default Auth;
