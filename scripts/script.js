const btnCar = document.querySelector('.btn-car');
const cleanCar = document.querySelector('.clean-car');

let count = 0;

btnCar.addEventListener('click', ()=>{
    const car = document.querySelector('#car-count');
    count++;
    car.innerHTML = count;
    cleanCar.style.display = "block";
});


cleanCar.addEventListener('click', ()=>{
    const car = document.querySelector('#car-count');
    count = 0;
    car.innerHTML = "";
    cleanCar.style.display = "none";
});



