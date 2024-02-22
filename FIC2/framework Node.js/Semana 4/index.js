const prompt = require('prompt-sync')();
const axios = require('axios');

async function cadastrarTarefa () {
    let id = parseInt(prompt("Digite o ID da tarefa: "));
    let descricao = prompt("Digite a descrição da tarefa: ");

    try {
        await axios.api.post('./tarefas.json', {
            id: id,
            descricao: descricao,
            status: "Pendente"
        });
        console.log("Tarefa cadatrada com sucesso!!");
    } catch (error) {
        console.log("Erro ao cadastras tarefa", error.message);
    }
}

cadastrarTarefa();