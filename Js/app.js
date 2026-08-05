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
// ==============================
// BOTOES
// ==============================

botoesFiltro.forEach(function (botao) {

    botao.addEventListener('click', function () {

        const tipo = botao.getAttribute('data-filtro');

        filtrarTarefas(tipo);

    });

});
// ==============================
// FUNÇÃO PARA ADICIONAR TAREFAS
// ==============================

function adicionarTarefa() {

    if (inptTarefa.value.trim() === "") {
        mensagemErro.textContent = "Digite uma tarefa.";
        return;
    }

    mensagemErro.textContent = "";

    const item = document.createElement('li');
    const botaoCheck = document.createElement('button');
    const span = document.createElement('span');
    const botaoDelet = document.createElement('button');


    item.classList.add('tarefa');
    item.setAttribute('data-id', contadorId);
    item.setAttribute('data-feita', 'false');

    botaoCheck.classList.add('tarefa__check');

    span.classList.add('tarefa__texto');
    span.textContent = inptTarefa.value;

    botaoDelet.classList.add('tarefa__deletar');
    botaoDelet.textContent = "✕";

    // Concluir tarefa
    botaoCheck.addEventListener('click', function () {

        const status = item.getAttribute('data-feita');

        if (status === 'false') {

            item.setAttribute('data-feita', 'true');
            item.classList.add('tarefa--feita');

        } else {

            item.setAttribute('data-feita', 'false');
            item.classList.remove('tarefa--feita');

        }

        atualizarContador();

    });

    // Deletar tarefa
    botaoDelet.addEventListener('click', function () {

        item.remove();

        atualizarContador();

    });

    item.appendChild(botaoCheck);
    item.appendChild(span);
    item.appendChild(botaoDelet);

    listaTarefas.appendChild(item);


    contadorId++;

    inptTarefa.value = "";

    atualizarContador();

}