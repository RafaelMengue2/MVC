class Tarefa {
    constructor (id, title, description){
    this.id = id;
    this.title = title;
    this.description = description;  
    }

    static async listarTarefas(){
        const Database = require ('./Database');
        return await Database.query("SELECT = FROM Tarefa");
    }

    async salvar (){
        const Database = require ('./Database');
        let resp = await Database.query(`INSERT INTO (title, description) VALUES ('${this.title}','${this.description}')`);
    }
}
module.exports = Tarefa;