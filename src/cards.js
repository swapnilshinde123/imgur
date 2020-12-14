 import React from "react";

 import './card.css'

function Card(props)
{
   return(

      <div > 
 
      <div class="card">
      <img src="https://cdn.eso.org/images/thumb300y/eso1907a.jpg" class="card-img-top img1" alt="..."/>
      <div class="card-body text-center">
          <h5 class="card-title">Alice Liddel</h5>
          <p class="card-text">
          <small class="text-muted" >
          <i class="fa fa-eye ">
          <span className="ml-2"> 1000</span>
          </i>
          <i class="fa fa-heart ml-2">
          <span className="ml-2"> like</span>
          </i>
          <i class="fa fa-comments ml-3" >
          <span className="ml-2"> comments</span>
          </i>
          </small>
          </p>
      
      </div>
      </div>
        
   </div>

         );
 
}  
export default Card;

