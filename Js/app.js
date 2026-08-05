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