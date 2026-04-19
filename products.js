let llaveworks = [];

fetch("data.json") .then(response => {
    return response.json();
}) .then(data => {
    llaveworks = data;    
    renderLlaveworks(llaveworks);  
})

const contenedor = document.querySelector('.sectionProducts')
function renderLlaveworks(lista){

    contenedor.innerHTML = ""; 

    lista.forEach(llave => {
        
        const article = document.createElement('div');
        article.classList.add('contetnPrincipal');

        article.innerHTML = `
                <div class="divImg">
                    <img class="imgProduct" 
                    src="${llave.image}" 
                    alt="${llave.alt}">
                    
                    <a href="https://acortar.link/iSfGU3" target="_blank" rel="noreferrer"></a>
                </div>
                
                <div class="descriptionContent">
                    <h4 class="descriptionText">${llave.title}</h4>
                    <div class="divTextPrice">
                        <h3 class="descriptionPrice">${llave.price}</h3>
                    </div>
                </div>
            </article>
        `;

        contenedor.appendChild(article);
    });
}








const buscador = document.getElementById("search");
buscador.addEventListener("input", () => {

    const texto = buscador.value.toLowerCase();

    const filtrados = llaveworks.filter(llave =>
        llave.data.especifico.toLowerCase().includes(texto) ||
        llave.title.toLowerCase().includes(texto) ||
        llave.data.style.toLowerCase().includes(texto) 
    );

    renderLlaveworks(filtrados);
});



const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.querySelector(".closeModal");

document.addEventListener("click", (e) => {
    
    if(e.target.classList.contains("imgProduct")){
        modal.style.display = "flex";
        modalImg.src = e.target.src;
    }
    
})

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
})





const comprar = document.querySelector(".compra");
const compraOculta = document.querySelector(".compraOculta");


comprar.addEventListener("click", ()=>{
    compraOculta.classList.toggle("active");
    compraOculta.classList.toggle("desactive");

})
