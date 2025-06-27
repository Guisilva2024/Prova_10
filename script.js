document.addEventListener('DOMContentLoaded', function () {
  const inputTarefa = document.getElementById('novaTarefa');
  const btnAdicionar = document.getElementById('btnAdicionar');
  const listaTarefas = document.getElementById('listaTarefas');

  // Adicionar Tarefa
  btnAdicionar.addEventListener('click', function () {
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa !== '') {
      const novaLi = document.createElement('li');
      novaLi.textContent = textoTarefa;

      // Marcar como concluída ao clicar
      novaLi.addEventListener('click', function () {
        novaLi.classList.toggle('concluida');
        console.log(`Tarefa marcada como: ${novaLi.classList.contains('concluida') ? 'concluída' : 'pendente'} - ${textoTarefa}`);
      });

      // Botão Remover
      const btnRemover = document.createElement('button');
      btnRemover.textContent = 'Remover';
      btnRemover.className = 'btnRemover';

      btnRemover.addEventListener('click', function (event) {
        event.stopPropagation(); // Evita marcar como concluída
        listaTarefas.removeChild(novaLi);
        console.log(`Tarefa removida: ${textoTarefa}`);
      });

      novaLi.appendChild(btnRemover);
      listaTarefas.appendChild(novaLi);

      console.log(`Tarefa adicionada: ${textoTarefa}`);
      inputTarefa.value = '';
      inputTarefa.focus();
    } else {
      alert('Por favor, insira uma tarefa válida.');
    }
  });
});
