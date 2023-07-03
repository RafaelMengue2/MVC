async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    
    const mysql = require ("mysql12/promise");
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: '3308',
        user: 'root',
        password: 'mysql',
        database: 'geral'
    });

    console.log("Conectou-se no MySql");
    global.connection = connection;
    return.connection;
}
class Database {
    static connect(){
        constructor(id, title, description){
            this
        }
    }

    static query(sql) {
        
    }
}