const h1 = document.querySelector("h1");
const doButton = document.querySelector("main button");


doButton.addEventListener("click", doFunc);


function doFunc(event){
    h1.classList.toggle("verde");
    h1.classList.add("violeta");
    console.log(h1.classList.contains("verde"));
};



h1.setAttribute("jueguito", "league of legends");

console.log(`msj desde consola ${h1.getAttribute("jueguito")}`);

console.log(document.createElement("table"));


const colocar = document.querySelector(".container p:last-child");

const img = document.createElement("img");
img.setAttribute("src", "https://nntheblog.b-cdn.net/wp-content/uploads/2022/06/Marin-Kitagawa.jpg");


colocar.replaceWith(img);


