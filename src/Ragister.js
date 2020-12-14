
import "./ragister.css";
import React , { useState } from 'react';


import {auth} from "./firebase";
import { Link ,useHistory} from "react-router-dom";


function Ragister(){
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const Register = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error =>alert(error.message))
    }

        return (
          <div className="main">
            <div className="container ">
              <div className="myCard">
                <div className="row">
                    <div className="col-md-6">
                        <div className="myLeftCtn"> 
                            <div>
                                <Link to="/">  
                                    <i class="fa  fa-times-circle text-center ion"></i> 
                                </Link> 
                            </div>
                            <form className="myForm text-center">
                           
                            <div className="form-group">
                                    <i className="fas fa-envelope"></i>
                                    <input className="myInput" value={email} type="text" placeholder="Email" id="email" required onChange={e => setEmail(e.target.value)}/> 
                                </div>

                                <div className="form-group">
                                    <i className="fas fa-lock"></i>
                                    <input className="myInput" value={password} type="password" id="password" placeholder="Password" required onChange={e => setPassword(e.target.value)}/> 
                                </div>
    
                              
                                <input onClick={Register} type="submit" className="butt" value="CREATE ACCOUNT"/>
                               
                            </form>
                        </div>
                    </div> 
                    <div className="col-md-6">
                        <div className="myRightCtn">
                           <div className="box">
                            <Link to="/Login">
                            <input type="submit" className="butt_out ml-1 " value="Login"/>
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

export default Ragister;
