//define variables
const numberArrange = document.querySelector('.numberArrange');
const btnIncrement = document.querySelector('.increment');
const btnDecrement = document.querySelector('.decrement');

let number = 0;

//write function
//action:Increment
//addShadow

btnIncrement.addEventListener('click',()=>{
    number++;
    numberArrange.innerHTML = number;
});

btnDecrement.addEventListener('click',()=>{
    number--;
    numberArrange.innerHTML = number;
})
