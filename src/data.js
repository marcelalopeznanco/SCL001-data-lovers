/* Manejo de data */
window.rickandmorty = {

    //Funcion que recorre la data y devuelve la propiedad masculina
    filterMales: (rickandmorty, btnmale) => {
        const filterMale = rickandmorty.filter(element => {
            return element.gender.includes("Male")
                //includes() determina si una matriz incluye un determinado elemento,
                //devuelve verdadero o falso según corresponda
        });
        return filterMale;

    },

    //Funcion que recorre la data y devuelve la propiedad femenina
    filterFemales: (rickandmorty, btnfemale) => {
        const filterFemale = rickandmorty.filter(element => {
            return element.gender.includes("Female")
        });
        return filterFemale;

    },



    //Funcion que recorre la data y la ordena de la A a la Z
    orderAz: (rickandmorty, btnaz) => {
        let ResultOrderAz = "";
        if (btnaz === "Az") {
            ResultOrderAz = rickandmorty.sort((a, b) => {
                return a.name.localeCompare(b.name);
            })
        };
        return ResultOrderAz;
    }
};