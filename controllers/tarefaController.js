const Tarefa = require('../models/tarefa');
const tarefas = [];
function getTarefas(req, res) {
    res.render('tarefas', { tarefas });
}
function addTarefa(req, res) {
    const { title, description } = req.body;
    const tarefa = new Tarefa(Date.now(), title, description);
    tarefas.push(tarefa);
    res.redirect('/tarefas');
}

module.exports = { getTarefas, addTarefa, };
