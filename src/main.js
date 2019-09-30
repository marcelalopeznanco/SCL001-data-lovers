/* Manejo del DOM */
const rickandmorty = window.RICKANDMORTY.results;
const containerRoot = document.getElementById("root");
const btnCharacter = document.getElementById("btncharacter");


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


btnCharacter.addEventListener("click", () => {
    document.getElementById("root").innerHTML = " ";
    showRickandmorty(rickandmorty);
});


const btnMale = document.getElementById("btnmale");
btnMale.addEventListener("click", () => {
    let btnmaleP = document.getElementById("btnmale").value;
    let printbtnmaleP = window.rickandmorty.filterMales(rickandmorty, btnmaleP);
    document.getElementById("root").innerHTML = " ";
    showRickandmorty(printbtnmaleP);
});

const btnFemale = document.getElementById("btnfemale");
btnFemale.addEventListener("click", () => {
    let btnfemaleP = document.getElementById("btnfemale").value;
    let printbtnfemaleP = window.rickandmorty.filterFemales(rickandmorty, btnfemaleP);
    document.getElementById("root").innerHTML = " ";
    showRickandmorty(printbtnfemaleP);
});




const btnOrderAz = document.getElementById("btnaz");
btnOrderAz.addEventListener("click", () => {
    let OrderAz = document.getElementById("btnaz").value;
    let printOrderAz = window.rickandmorty.orderAz(rickandmorty, OrderAz);
    document.getElementById("root").innerHTML = " ";
    showRickandmorty(printOrderAz);

});





/*  document.getElementById("btnaz").addEventListener("click", () => {

    const btnazP = document.getElementById("btnaz").value

    let ver = sortRickandmortys(rickandmorty, btnazP)
        //let printbtnazP = window.rickandmorty.orderRickandmorty(rickandmorty, btnazP);
    document.getElementById("root").innerHTML = " ";
    showRickandmorty(sortRickandmortys);
});

*/

/*
window.data = {
    //filtrar por tipo
    filterPokemons: (data, typeP) => {
        const filterPokemon = data.filter(element => {
            return element.type.includes(typeP)
        });
        return filterPokemon;
    }

} ;
*/
//let printTypeP = window.data.filterPokemons(data, typeP);