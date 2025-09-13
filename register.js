const registerForm = document.querySelector('#register-form');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirm-password').value;

  if (password !== confirmPassword) {
    alert("As senhas não conferem!");
    return;
  }

  const user = { name, email, password };

  // Salva no localStorage
  localStorage.setItem('user', JSON.stringify(user));

  alert("Cadastro realizado com sucesso!");
  window.location.href = "pages/login.html"; // Redireciona para login
});
