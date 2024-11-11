// Seleciona o formulário e o modal
const form = document.querySelector('form');
const modal = document.createElement('div');

// Configura o conteúdo do modal
modal.innerHTML = `
  <div class="modal-overlay">
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <h2>Confirmação</h2>
      <p>Seu formulário foi enviado com sucesso!</p>
    </div>
  </div>
`;

// Adiciona o modal ao corpo do documento
document.body.appendChild(modal);

// Seleciona o botão de fechar no modal
const closeModal = modal.querySelector('.close-modal');

// Adiciona o evento de clique no botão de fechar
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Adiciona o evento de clique fora do modal para fechá-lo
modal.querySelector('.modal-overlay').addEventListener('click', (event) => {
  if (event.target === modal.querySelector('.modal-overlay')) {
    modal.style.display = 'none';
  }
});

// Esconde o modal inicialmente
modal.style.display = 'none';

// Adiciona o evento de envio do formulário
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio real do formulário
  modal.style.display = 'flex'; // Mostra o modal de confirmação
});
