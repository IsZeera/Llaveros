
const comprar = document.querySelector(".compra");
const compraOculta = document.querySelector(".compraOculta");


comprar.addEventListener("click", ()=>{
    compraOculta.classList.toggle("active");
    compraOculta.classList.toggle("desactive");

})
