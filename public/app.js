// O Copilot vai te ajudar a implementar o handler do formulário no Step 4.

document.getElementById('newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('status').textContent = 'Inscrição confirmada!';
});
