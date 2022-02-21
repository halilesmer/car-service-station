import React from "react";
import vehicle from "../Assets/vehicle-garage.webp";
import {texts} from '../Data/texts.js';
import { Background } from "react-imgix";
/* import ProgressiveImage from "react-progressive-bg-image";
import styled from "styled-components"; */

function KfzService() {

    
  return (
    <Background
      //src="https://assets.imgix.net/tutorials/forest4.webp"
      src="https://images.unsplash.com/photo-1453733190371-0a9bedd82893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80"
      //imgixParams={{ w: 1920, h: 500 }}
      className="background"
    >
      <h2 className="background__h2">{texts[0].home}</h2>
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
