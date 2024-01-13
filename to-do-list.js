// Função para adicionar tarefa à lista
function adicionarTarefa() {
  // Obtém o valor do input de texto
  var tarefaTexto = document.getElementById('tarefaInput').value;

  // Verifica se o texto não está vazio
  if (tarefaTexto.trim() !== '') {
    // Cria um novo item de lista (li)
    var novaTarefa = document.createElement('li');

    // Adiciona um checkbox e o texto da tarefa ao novo item de lista
    novaTarefa.innerHTML = `<input type="checkbox" onchange="marcarComoConcluido(this)"> ${tarefaTexto}`;

    // Adiciona o novo item de lista à lista de tarefas
    document.getElementById('listaTarefas').appendChild(novaTarefa);

    // Limpa o campo de input de texto
    document.getElementById('tarefaInput').value = '';
  }
}

// Função para marcar tarefa como concluída
function marcarComoConcluido(checkbox) {
  // Obtém o elemento pai (li) do checkbox
  var tarefaItem = checkbox.parentNode;

  // Adiciona ou remove a classe 'task-done' para riscar o texto
  if (checkbox.checked) {
    tarefaItem.classList.add('task-done');
  } else {
    tarefaItem.classList.remove('task-done');
  }
}

  