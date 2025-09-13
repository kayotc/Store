const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    alert("Login realizado com sucesso!");
     // Salva o usuário logado
    localStorage.setItem('storedUser', JSON.stringify(storedUser));
    window.location.href = "home.html"; // Redireciona para a home
  } else {
    alert("E-mail ou senha incorretos!");
  }
});
