//importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

// iniciar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//ultilizar o objeto de banco de dados para nossas operaçoes
db.serialize(()=>{
    // criar uma tabela com comandos sql
    /*db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            adress2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
    //inserir dados na tabela
    const query=`
    INSERT INTO places (
        image,
        name,
        address,
        adress2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
`
    const values = [
        "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)

    consultar dados da tabela
    db.all(`SELECT * FROM places`, function(err, rows){
       if(err){
           return console.log(err)
       }
    
       console.log("Aqui estao seus registros: ")
        console.log(rows)
    })


    //deletar um dado da tabela
    db.run(`DELETE FROM places WHERE id = ?`, [5], function(err){
        if(err){
            return console.log(err)
        }
    
        console.log("Registro deletado com sucesso!")
    })*/
})