
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
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title: "Pintura",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci perferendis sint omnis",
        url: "https://github.com/saulocurty1"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729048.svg",
        title: "Recortes",
        category: "Criatividade",
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


    const reversedIdeas = [...ideas].reverse()


    let lastIdeas = []
    for(let idea of reversedIdeas){
       if(lastIdeas.length < 2){
           lastIdeas.push(idea)
       }
    }
    return res.render("index.html", { ideas:lastIdeas })
})


server.get("/ideias", function(req, res){

    const reversedIdeas = [...ideas].reverse()
    return res.render("ideias.html", {ideas:reversedIdeas})
})


// liguei o server na porta 3000
server.listen(3000)