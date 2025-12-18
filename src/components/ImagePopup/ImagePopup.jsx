import React, { useState } from 'react';

export default function ImagePopup(props){

      
    return(
   
      <div class="popup__container-image">
       


        <img src={props.link}

          alt="Imagem ampliada"
          class="popup__image"
        />
        <p class="popup__image-title">{props.name}</p>
      </div>
  
      
      

    )
}