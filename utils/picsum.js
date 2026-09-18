
const main__kdk = document.getElementById('main__kdk');
let img_generate = "https://picsum.photos/800/600";
let desplazamiento = 0;

let reset = false

window.addEventListener('wheel', (e) => {

    desplazamiento += e.deltaY;
    let numRandomX = Math.floor(Math.random() * 100) + 1;
    let numRandomY = Math.floor(Math.random() * 100) + 1;


    crearImagenes(numRandomX ,numRandomY, desplazamiento);
    
    /*
    if(desplazamiento <= 100){
            crearImagenes(numRandomX ,numRandomY);
            console.log(desplazamiento);
            reset = true;
    }else{
            reset = false;
    }
    console.log(reset);
    */

})

function crearImagenes(numRandomX,numRandomY,desplazamiento){
    let nuevaImg = document.createElement('img');
    nuevaImg.src = img_generate;
    nuevaImg.style.transform = `translate(${numRandomX}vw,${numRandomY}vh) scale(0.${desplazamiento})`;


    main__kdk.appendChild(nuevaImg);
}



