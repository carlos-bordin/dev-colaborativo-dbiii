const form_adicionar_tarefa = document.getElementById("form-adicionar-tarefa")
const template_tarefa = document.getElementById("template-tarefa");
const container_tarefas = document.getElementById("container-tarefas")

let task_counter = 0

function atualizarAvisoTarefas() {
    if (container_tarefas.querySelector(".tarefa")) {
        container_tarefas.querySelector("#aviso-lista-vazia").style.display = "none"
    } else {
        container_tarefas.querySelector("#aviso-lista-vazia").style.display = "block"
    }
}

form_adicionar_tarefa.addEventListener("submit", (event) => {
    event.preventDefault(); // impede o form de recarregar a página (sobescreve o comportamento padrão)
    const formData = new FormData(event.target);

    if (formData.get('nome-tarefa') == "") return

    task_counter += 1

    let nova_tarefa = template_tarefa.content.cloneNode(true).querySelector(".tarefa"); // clona o template HTML e elementos filhos
    nova_tarefa.id = ("tarefa-" + task_counter)
    nova_tarefa.querySelector("p").textContent = formData.get('nome-tarefa')

    nova_tarefa.querySelector("p").addEventListener('click', function (event) {
        const child = event.target.closest('.tarefa');
        if (!child) return;
        nova_tarefa.classList.toggle("concluida")
    })


    event.target.reset();
    container_tarefas.appendChild(nova_tarefa)
    atualizarAvisoTarefas()
})

// init
atualizarAvisoTarefas()