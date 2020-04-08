const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function(){
    //criar tabela
    db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
    );
    `)

    // //inserir dados
    // const query =`
    // INSERT INTO ideas(
    //     image,
    //     title,
    //     category,
    //     description,
    //     link
    // ) VALUES(?,?,?,?,?);
    // `
    // const values = [
    //     "https://image.flaticon.com/icons/svg/2729/2729027.svg",
    //     "Meditacao",
    //     "Mentalidade",
    //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci perferendis sint omnis",
    //     "https://github.com/saulocurty1"
    // ]

    // db.run(query, values, function(err){
    //     if (err) return console.log(err)

    //     console.log(this)
    // })

    //deletar dados


    /* db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err){ 
        if(err) return console.log(err)                          
       console.log("DELETEI", this)                              
     })                                                          
    */



    //consultar dados
    // db.all(`SELECT * FROM ideas`, function(err, rows){
    //     if (err) return console.log(err)

    //     console.log(rows)
    // })



})

module.exports = db