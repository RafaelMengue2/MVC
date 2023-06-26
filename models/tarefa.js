class Tarefa {
    constructor (id, title, description){
    this.id = id;
    this.title = title;
    this.description = description;  
    }

    listarTarefas(){
        const Database = require ('Database');
        let tarefas = Database.query("SELECT * FROM tarefas");
        return tarefas;
    }
}
module.exports = Tarefa;