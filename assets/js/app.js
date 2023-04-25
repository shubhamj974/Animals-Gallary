let cl = console.log;
const Animals = document.getElementById('Animals');
const allDiv = document.querySelectorAll('.all');

const OnAnimals = (e) => {
    let Ani = e.target.value;
    allDiv.forEach(ele => ele.classList.add('d-none'));
    const select = [...document.querySelectorAll('.' + Ani)];
    select.forEach(ele => ele.classList.remove('d-none'));
}

Animals.addEventListener('change' , OnAnimals)