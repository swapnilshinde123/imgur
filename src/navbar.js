import React from 'react';
import logo from './logo.png'; 
import jatin from './jatin.jpeg'; 
import { Link } from "react-router-dom";

import "./index.css";
import {useStateValue} from "./StateProvider";
import {auth} from './firebase';

function Navbar(){
  const  user = useStateValue();
  
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      
    }
  } 


        return (

            
        
         <div className="nav" >

         <div class="input-group md-form form-sm form-2 pl-0  ">
         <img src={logo} className="logo  " />
         
         <a  type="button" class="Button btn btn-success btn-sm sign_up" >
         <img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.13ab64f9f36ad8f25ae3544b350e2ae1.svg"/>
         <span class="newPostLabel ml-3">New post</span></a>
        <input class="form-control my-4 py-1  Search  " type="text" placeholder="Images, #tags, @users oh my!" aria-label="Search"/>
                <div class="input-group-append ion my-4 btn1 ">
                    <span class="input-group-text red lighten-3  " id="basic-text1"><i class="fa fa-search text-grey"
                    aria-hidden="true"></i></span>
                </div>
                <Link to= {!user && '/login'}> 
                <div onClick={handleAuthentication} className="header_option">
                <span className="btn btn-light btn-sm sign_in ml-5">{user ? 'Sign Out' : 'Sign In'}</span>
               </div>
                 </Link>
                 <Link to ="Ragister">
                <button type="button" class="btn btn-success btn-sm sign_up">Sign up</button>
                  </Link>
                <div>
                <h2 className="h2"> BYO banana for sale</h2>
                <Link to ="Ragister">
               
                  <img class=" jj" src={jatin} />
   
                </Link>
                 </div>
               
           </div>
       

    </div>
         
       
        );
    }

export default Navbar;
