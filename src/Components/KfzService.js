import React from "react";
import vehicle from "../Assets/vehicle-garage.webp";
import { Background } from "react-imgix";

function KfzService() {
  return (
    <Background
      //src="https://assets.imgix.net/tutorials/forest4.webp"
      src={vehicle}
      //imgixParams={{ w: 1920, h: 500 }}
      className="hero-image"
    >
      <h2>Responsive Image Gallery with React and imgix</h2>
    </Background>
  );
}

export default KfzService;

  /*  <Background
        //src="https://assets.imgix.net/tutorials/forest4.webp"
        src={images[0].vehicle}
        //imgixParams={{ w: 1920, h: 500 }}
        className="hero-image"
        >
        <h2>Responsive Image Gallery with React and imgix</h2>
        </Background>
        ); */


/*  <div className="hero-image">
       <img src={vehicle} width={1920} height={750} alt="vehicle-garage" />
       <div className="image-text">
         <h2 >Responsive Image Gallery with React and imgix</h2>
       </div>
     </div> 
     
     
     
     <div className="gallery">
      <div className="gallery-image">
        <img src={vehicle} width={1920} height={1080} alt="vehicle-garage" />

        <div className="gallery-text">
          <h3>BOOM!</h3>
        </div>
      </div>
    </div>*/
