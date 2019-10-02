/* Manejo del DOM */
const rickandmorty = window.RICKANDMORTY.results;
const containerRoot = document.getElementById("root");
const btnCharacter = document.getElementById("btncharacter");


//Funcion que recorre la data
function showRickandmorty(rickandmorty) {
    for (let i = 0; i < rickandmorty.length; i++) {
        containerRoot.innerHTML += `
        <div>
        <div class="Cards">
        <div class="Cards-header">
            <div class="img">
                <img src="${rickandmorty[i].image}">
            </div>
            <div class="Cards-body"
            <h2>${rickandmorty[i].name}</h2>
            </div>
        </div>
        </div>
        </div>
         `

    }

}
console.log(rickandmorty);

//Funcion que muestra la data
btnCharacter.addEventListener("click", () => {
    document.getElementById("root").innerHTML = " ";
    showRickandmorty(rickandmorty);
});

//Filtro personajes Masculinos
const btnMale = document.getElementById("btnmale");
btnMale.addEventListener("click", () => {
    let btnmaleP = document.getElementById("btnmale").value;
    let printbtnmaleP = window.rickandmorty.filterMales(rickandmorty, btnmaleP);
    document.getElementById("root").innerHTML = " ";
    showRickandmorty(printbtnmaleP);
});
//Filtro personajes Femeninos
const btnFemale = document.getElementById("btnfemale");
btnFemale.addEventListener("click", () => {
    let btnfemaleP = document.getElementById("btnfemale").value;
    let printbtnfemaleP = window.rickandmorty.filterFemales(rickandmorty, btnfemaleP);
    document.getElementById("root").innerHTML = " ";
    showRickandmorty(printbtnfemaleP);
});
//Filtro personajes Vivos
const btnAlive = document.getElementById("btnalive");
btnAlive.addEventListener("click", () => {
    let btnaliveP = document.getElementById("btnalive").value;
    let printbtnaliveP = window.rickandmorty.filterAlives(rickandmorty, btnaliveP);
    document.getElementById("root").innerHTML = " ";
    showRickandmorty(printbtnaliveP);
});
//Filtro personajes Muertos
const btnDead = document.getElementById("btndead");
btnDead.addEventListener("click", () => {
    let btndeadP = document.getElementById("btndead").value;
    let printbtndeadP = window.rickandmorty.filterDeads(rickandmorty, btndeadP);
    document.getElementById("root").innerHTML = " ";
    showRickandmorty(printbtndeadP);
});

//Filtro personajes desconocido
const btnUnknown = document.getElementById("btnunknown");
btnUnknown.addEventListener("click", () => {
    let btnunknownP = document.getElementById("btnunknown").value;
    let printbtnunknownP = window.rickandmorty.filterUnknowns(rickandmorty, btnunknownP);
    document.getElementById("root").innerHTML = " ";
    showRickandmorty(printbtnunknownP);
});

//orden personajes alfabeticamente A-Z
const btnOrderAz = document.getElementById("btnaz");

btnOrderAz.addEventListener("click", () => {
    document.getElementById("root").innerHTML = " ";
    let orderAzp = document.getElementById("btnaz").value;
    let printOrderAz = window.rickandmorty.orderAz(rickandmorty, orderAzp);
    showRickandmorty(printOrderAz);

});

//orden personajes alfabeticamente Z-A
const btnOrderZa = document.getElementById("btnza");
btnOrderZa.addEventListener("click", () => {
    let OrderZa = document.getElementById("btnza").value;
    let printOrderZa = window.rickandmorty.orderAz(rickandmorty, OrderZa);
    document.getElementById("root").innerHTML = " ";
    showRickandmorty(printOrderZa);

});