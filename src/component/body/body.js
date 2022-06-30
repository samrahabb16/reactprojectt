
import React from 'react'
 import  Card1 from '../../comp1/card1'
 import  Card2 from '../../comp2/card2'
 import  Card3 from '../../comp3/card3'

 const Body =()  => {
     return (
         <div>
             <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/1887792/pexels-photo-1887792.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/166360/pexels-photo-166360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/1166991/pexels-photo-1166991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="container">
  <div class="row">
    <div class="col-sm">
      <Card1/>
    </div>
    <div class="col-sm">
    <Card2/>

    </div>
    <div class="col-sm">
    <Card3/>

    </div>
  </div>
</div>
         </div>
     )
 }

 export default Body
 
