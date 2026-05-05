const openBtn = document.getElementById("openBtn");
const card = document.getElementById("card");
const music = document.getElementById("music");
const blowBtn = document.getElementById("blowBtn");
const finalscene = document.getElementById("finalscene");
const finalCake = document.getElementById("finalCake");

let heartInterval;
let starInterval;

// ABRIR CARTA
openBtn.onclick = () => {
    openBtn.style.display = "none";
    card.style.display = "block";

    startHearts("body");

    music.volume = 0.3;
    music.play().catch(() => {});
};

// IR A ESCENA FINAL
blowBtn.onclick = () => {
    card.style.display = "none";

    // limpiar corazones anteriores
    clearInterval(heartInterval);

    finalscene.style.display = "flex";

   // IMPORTANTE: asegurarse que NO estén apagadas aún
    finalCake.classList.remove("blow");

    // animar entrada
    setTimeout(() => {
        finalCake.classList.add("showCake");
    }, 300);

    // después se apagan
    setTimeout(() => {
        finalCake.classList.add("blow");
    }, 4000);

    // nuevos efectos
    startHearts("finalscene");
    startStars();
};

// CORAZONES
function startHearts(containerId) {

    const container = containerId === "body"
        ? document.body
        : document.getElementById(containerId);

    heartInterval = setInterval(() => {

        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        let x = Math.random() * window.innerWidth;
        let y = window.innerHeight;

        let vx = (Math.random() - 0.5) * 4;
        let vy = -(Math.random() * 2 + 2); // subir

        heart.style.left = x + "px";
        heart.style.top = y + "px";

        container.appendChild(heart);

        const move = setInterval(() => {
            x += vx;
            y += vy;

            if (x <= 0 || x >= window.innerWidth - 20) vx *= -1;
            if (y <= 0) vy *= -1;

            heart.style.left = x + "px";
            heart.style.top = y + "px";
        }, 20);

        setTimeout(() => {
            clearInterval(move);
            heart.remove();
        }, 5000);

    }, 300);
}

// ESTRELLAS
function startStars() {

    const container = document.getElementById("finalscene");

    starInterval = setInterval(() => {

        const star = document.createElement("div");
        star.classList.add("heart");
        star.innerHTML = "⭐";

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        let vx = (Math.random() - 0.5) * 4;
        let vy = (Math.random() - 0.5) * 4;

        star.style.left = x + "px";
        star.style.top = y + "px";

        container.appendChild(star);

        const move = setInterval(() => {
            x += vx;
            y += vy;

            if (x <= 0 || x >= window.innerWidth - 20) vx *= -1;
            if (y <= 0 || y >= window.innerHeight - 20) vy *= -1;

            star.style.left = x + "px";
            star.style.top = y + "px";
        }, 20);

        setTimeout(() => {
            clearInterval(move);
            star.remove();
        }, 5000);

    }, 400);
}

