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

    //Funcion que recorre la data y devuelve la propiedad Vivos
    filterAlives: (rickandmorty, btnalive) => {
        const filterAlive = rickandmorty.filter(element => {
            return element.status.includes("Alive")
        });
        return filterAlive;

    },

    //Funcion que recorre la data y devuelve la propiedad Muertos
    filterDeads: (rickandmorty, btndead) => {
        const filterDead = rickandmorty.filter(element => {
            return element.status.includes("Dead")
        });
        return filterDead;

    },

    //Funcion que recorre la data y devuelve la propiedad Desconocido
    filterUnknowns: (rickandmorty, btnunknown) => {
        const filterUnknown = rickandmorty.filter(element => {
            return element.status.includes("unknown")
        });
        return filterUnknown;

    },


    //Funcion que recorre la data y la ordena de la A a la Z y si no devuelve de la Z a la A
    orderAz: (rickandmorty, btnaz) => {
        let resultOrderAz = " ";
        if (btnaz === "az") {
            resultOrderAz = rickandmorty.sort((a, b) => {
                return a.name.localeCompare(b.name);
            })

        } else if (btnaz === "za") {
            resultOrderAz = rickandmorty.sort((a, b) => {
                return b.name.localeCompare(a.name)
            })
        }
        return resultOrderAz;
    }
};