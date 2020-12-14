import React ,{useEffect}from 'react';

import './index.css';

import Navbar from "./navbar";

import {BrowserRouter as Router, Switch ,Route}
from "react-router-dom";
import Ragister from "./Ragister";
import Login from "./Login";
import Morecard from './morecard';
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";


function Header() {

  const dispatch = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

    return(
    <div>
        <Router>

          <div className="app">
        
          
          
          <Switch>
            <Route exact path="/">
          
            <Navbar/>
            <Morecard/>
            </Route>
            <Route  path="/Login">
            
                <Login/>
               
            </Route>
            <Route path="/Ragister">
          
              <Ragister/>
            </Route> 
          </Switch>
       </div>
    </Router>


    </div>
   
);
}
export default Header;


 