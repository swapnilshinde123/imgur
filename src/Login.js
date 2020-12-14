import React , { useState } from 'react';
import "./login.css";

import {auth} from "./firebase";
import { Link ,useHistory} from "react-router-dom";

function Login(){
    
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

   

        return (
            <div className="main">
            <div className="container">
            <div className="myCard">
                <div className="row">
                    <div className="col-md-6">
                        <div className="myLeftCtn"> 
                        <div>
                            <Link to="/">  
                                <i class="fa fa-times-circle text-center ion"></i>  
                                     
                            </Link> 
                        
                             
                            </div>
                            <form className="myForm text-center">
                                <header>Login</header>
                                <div className="form-group">
                                    <i className="fas fa-envelope"></i>
                                    <input className="myInput" value={email} type="text" placeholder="Email" id="email" required onChange={e => setEmail(e.target.value)}/> 
                                </div>

                                <div className="form-group">
                                    <i className="fas fa-lock"></i>
                                    <input className="myInput" value={password} type="password" id="password" placeholder="Password" required onChange={e => setPassword(e.target.value)}/> 
                                </div>

    
                                <input type="submit"onClick={signIn} className="butt" value="LOGIN"/>
                                
                            </form>
                        </div>
                    </div> 
                    <div className="col-md-6">
                        <div className="myRightCtn">
                            <div className="box"><header></header>                 
                                    <Link to="/Ragister">
                                       <input type="submit" className=" butt_out text-center ml-1 " value="Ragister"/>
                                     </Link>    
                                    
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
    </div>
   </div>    
        );
    }

export default Login;