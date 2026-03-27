//DOM Elements
let overlay = document.querySelector(".overlay");
let overlayImg = document.querySelector(".overlay img");

//open overlay on image click
document.querySelectorAll(".image-box img").forEach(img => {
    img.addEventListener("click", ()=> {
        overlayImg.src = img.src;
        overlay.classList.remove("hide");
    })
})

//closing overlay
overlay.addEventListener("click", ()=> {
    overlay.classList.add("hide");
})