
const main__kdk = document.getElementById('main__kdk');
let img_generate = "https://picsum.photos/800/600";

let desplazamiento = 0;

window.addEventListener('wheel', (e) => {
    desplazamiento += e.deltaY;
    console.log(desplazamiento)

   crearImagenes(img_generate, desplazamiento, desplazamiento, 1);
})

function crearImagenes(img,x,y,o){
    let nuevaImg = document.createElement('img');
    nuevaImg.src = img;

    nuevaImg.style.transform = `translate(${x}px,${y}px)`;

    main__kdk.appendChild(nuevaImg);
}



