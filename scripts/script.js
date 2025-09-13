const btnCar = document.querySelectorAll('.btn-car');
const cleanCar = document.querySelector('.clean-car');
const car = document.querySelector('#car-count');

let count = 0;

btnCar.forEach(btn => {
    btn.addEventListener('click', ()=> {
        count++;
        car.innerHTML = count;
        cleanCar.style.display = "block";
        car.style.color = "#fff";
    });
});

// botão para limpar carrinho
cleanCar.addEventListener('click', () => {
  count = 0;
  car.textContent = "";
  cleanCar.style.display = "none";
});



// Pega o usuário logado no localStorage

const storedUser = JSON.parse(localStorage.getItem('storedUser')); // mesma chave usada no login

if(storedUser && storedUser.name) {
  const user = document.querySelector("#userName"); // precisa existir no HTML
  user.textContent = `Olá,`+ storedUser.name.charAt(0).toUpperCase()+storedUser.name.slice(1); // exibe o nome do usuário logado, limitado a 10 caracteres
}






