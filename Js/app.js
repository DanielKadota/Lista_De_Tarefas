// ==============================
// SELEÇÃO DOS ELEMENTOS DO HTML
// ==============================

const btnAdd = document.querySelector('#btnAdicionar');
const inptTarefa = document.querySelector('#inputTarefa');
const mensagemErro = document.querySelector('#mensagemErro');
const listaTarefas = document.querySelector('#listaTarefas');
const contadorTexto = document.querySelector('#contadorTexto');

//BOTOES
const botoesFiltro = document.querySelectorAll('.filtro');


// ==============================
// VARIÁVEL
// ==============================

let contadorId = 1;

// ==============================
// FUNÇÃO ATUALIZAR CONTADOR
// ==============================

function atualizarContador() {

    const tarefas = document.querySelectorAll('.tarefa');
    let contadorPendentes = 0;

    tarefas.forEach(function (tarefa) {

        const valorContador = tarefa.getAttribute('data-feita');

        if (valorContador === 'false') {
            contadorPendentes++;
        }

    });

    contadorTexto.textContent = contadorPendentes;
}
// ==============================
// VERIFICAR SE A TAREFAS
// ==============================

function filtrarTarefas(tipo) {
    const tarefas = document.querySelectorAll('.tarefa');

    tarefas.forEach(function (tarefa) {

        const statusTarefa = tarefa.getAttribute('data-feita');

        if (tipo === "todas") {

            tarefa.style.display = 'flex';

        } else if (tipo === "pendentes") {

            if (statusTarefa === 'false') {
                tarefa.style.display = 'flex';
            } else {
                tarefa.style.display = 'none';
            }
        } else if (tipo === "concluidas") {

            if (statusTarefa === 'true') {
                tarefa.style.display = 'flex';
            } else {
                tarefa.style.display = 'none';
            }
        }

    });

}