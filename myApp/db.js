const db = {

    comments : [

        {
            fotoDePerfil:'/images/users/juanMartinez.jpeg',
            nombre: "Juan Martinez ",
            texto: "New Fender Stratocaster 2021",
        },

        {
            fotoDePerfil: "/images/users/veronica.jpeg",
            nombre: "Veronica Ojeda ",
            texto: "Light Blue Fender",
        },

        {
            fotoDePerfil: "/images/users/gasparLeveratto.png",
            nombre: "Gaspar Leveratto",
            texto: "Fender Acoustic",
        },

        
    ],

    products : [

    

        {
            imagen: "/images/products/fenderMustang.jpeg",
            nombre: "Light Blue Fender Stratocaster",
            descripcion: "Light Blue Ultimate design",
            fecha: 09/01/1966
        },

        {
            imagen: "/images/products/fenderAcoustic.jpeg",
            nombre: "Standard Fender Acoustic",
            descripcion: "Acoustic Fender new 12 strings guitar. One of the most bought products",
            fecha: 09/04/2022
        },

        {
            imagen: "/images/products/blackStrat.jpeg",
            nombre: "Black Fender Stratocaster",
            descripcion: "Most comnmon Stratrocaster. Time passes and still one of the most bought guitars in Fender's history",
            fecha: 11/03/2022
        },

        {
            imagen: "/images/products/gilmourStrat.webp",
            nombre: "Black stratocaster Gilmour edition",
            descripcion: "The Black Strat is the nickname for a black Fender Stratocaster guitar played by David Gilmour of the progressive rock band Pink Floyd",
            fecha: 11/04/2022
        },

        {
            imagen: "/images/products/acousticNegra.jpeg",
            nombre: "Black Fender acoustic",
            descripcion: "Black Edition On. New acoustic guitar 2022 season",
            fecha: 06/04/2022
        },

        {
            imagen: "/images/products/goldTelecaster.jpg",
            nombre: "Gold Fender Telecaster",
            descripcion: "Clasic guitar model",
            fecha: 23/03/1990
        },

        {
            imagen: "/images/products/fenderMustang.jpeg",
            nombre: "Light Blue Fender Mustang",
            descripcion: "Light Blue Fender Mustang Guitar, unique edition",
            fecha: 18/04/1989
        },

        {
            imagen: "/images/products/sunburstTelecaster.webp",
            nombre: "Sunburst Orange Telecaster",
            descripcion: "The most Famous guitar. John Frusciante's main Guitar",
            fecha: 22/03/2022
        },

    ],

    profile : [ 
        
        {

        email: "jmartinez@gmail.com",
        usuario: "Juan Martinez ",
        fecha: 3/15/2022,
        foto: "/images.users/juanMartinez.jpeg",
        contrasenia: "Martinez12345",
        dni: 39466854,

    },

    {

        email: "veronica@gmail.com",
        usuario: "Veronica Ojeda ",
        fecha: 4/8/2011,
        foto: "/images/users/veronica.jpeg",
        contrasenia: "vero6789",
        dni: 40877234,

    },
    {

        email: "leveratto@gmail.com",
        usuario: "Gaspar Leveratto",
        fecha: 3/15/2019,
        foto: "/images/users/gasparLeveratto.png",
        contrasenia: "98172833",
        dni: 42777623,

    },
    

    ]};

module.exports = db;