'use strict'

// Constantes y variables 
const imgList = document.querySelectorAll('.img')
const lightbox = document.querySelector('.lightbox')
const grande = document.querySelector('.grande')
const closeBtn = document.querySelector('.close')

// Cuando hago CLICK en .img lo que pasa es que: 
    // al .lightbox se le añade (add) la clase isActive
    // pero a la imagen grande .grande se le añade el atributo src de la .img

imgList.forEach( (eachImg, index)=> {
    // dentro de la lista de imagenes, a cada una de ellas, le añadimos un listener que será click
    imgList[index].addEventListener('click', ()=>{

        lightbox.classList.add('isActive')
        grande.src = imgList[index].src
    })
})


// Cuando hago CLICK en .close lo que pasa es que: 
    // .lightbox se le elimina (remove) la clase isActive
closeBtn.addEventListener('click', ()=> {
    lightbox.classList.remove('isActive')
})