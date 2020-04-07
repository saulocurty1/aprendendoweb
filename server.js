
// express craindo e configurando server

const express = require("express")
const server = express()
const ideas =[
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Curso de Programacao",
        category: "Estudo",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci perferendis sint omnis",
        url: "https://github.com/saulocurty1"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercicio",
        category: "Saude",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci perferendis sint omnis",
        url: "https://github.com/saulocurty1"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditacao",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci perferendis sint omnis",
        url: "https://github.com/saulocurty1"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaoke",
        category: "Diversao em Familia",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci perferendis sint omnis",
        url: "https://github.com/saulocurty1"
    },
]

//configurar arquivos estaticos
server.use(express.static("public"))

// configurar nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache:true, // boolean 
})

// criei uma rota / 
// e capturo o pedido do cliente
server.get("/", function(req, res){
    const lastIdeas = []
    for(let idea of ideas){
       if(lastIdeas.length < 2){
           
       }
    }


    return res.render("index.html", { ideas })
})


server.get("/ideias", function(req, res){
    return res.render("ideias.html")
})


// liguei o server na porta 3000
server.listen(3000)