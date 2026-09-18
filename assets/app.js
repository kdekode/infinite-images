
const main__kdk = document.getElementById('main__kdk');
const MAX_IMAGENES = 50;
let numeroImagen = 0;

window.addEventListener('wheel', (e) => {
    if (e.deltaY === 0) return;

    crearImagen(e.deltaY > 0 ? -1 : 1);
}, { passive: true });

function crearImagen(direccion) {
    const imagenes = main__kdk.querySelectorAll('.imagen-flotante');

    if (imagenes.length >= MAX_IMAGENES) {
        imagenes[0].remove();
    }

    const nuevaImg = document.createElement('img');
    const tamano = numeroAleatorio(160, 320);
    const limiteX = Math.max(0, window.innerWidth - tamano);
    const limiteY = Math.max(0, window.innerHeight - tamano);
    const posicionX = Math.random() * limiteX;
    const posicionY = Math.random() * limiteY;
    const distanciaSalida = direccion < 0
        ? -(posicionY + tamano + 40)
        : window.innerHeight - posicionY + tamano + 40;

    numeroImagen += 1;

    nuevaImg.className = 'imagen-flotante';
    nuevaImg.alt = '';
    nuevaImg.style.width = `${tamano}px`;
    nuevaImg.style.height = `${tamano}px`;
    nuevaImg.style.left = `${posicionX}px`;
    nuevaImg.style.top = `${posicionY}px`;

    nuevaImg.addEventListener('load', () => {
        if (!nuevaImg.isConnected) return;

        animarImagen(nuevaImg, distanciaSalida);
    }, { once: true });
    nuevaImg.addEventListener('error', () => nuevaImg.remove(), { once: true });

    main__kdk.appendChild(nuevaImg);
    nuevaImg.src = `https://picsum.photos/seed/${Date.now()}-${numeroImagen}/800/600`;
}

function animarImagen(imagen, distanciaSalida) {
    const animacion = imagen.animate([
        { opacity: 0, transform: 'translateY(0) scale(0.75)' },
        { opacity: 1, transform: 'translateY(0) scale(1)', offset: 0.35 },
        { opacity: 1, transform: `translateY(${distanciaSalida}px) scale(1)` }
    ], {
        duration: numeroAleatorio(3000, 5000),
        easing: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
        fill: 'forwards'
    });

    animacion.addEventListener('finish', () => imagen.remove());
}

function numeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}
