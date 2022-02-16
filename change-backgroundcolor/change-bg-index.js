//define necessary variables
const body_web = document.querySelector('body');
const button_change = document.querySelector('.button');
const color_options = ['#2EB086','#655D8A','#D885A3','#7897AB','#04293A','#570530','#F2F013','#FF1700','#544179','#FF6363','#184D47','#004182'];

body_web.style.backgroundColor = '#364F6B';
button_change.addEventListener('click',()=>{
    const colorIndex = parseInt(Math.round(Math.random()*color_options.length));
    body_web.style.backgroundColor = color_options[colorIndex];
    console.log(color_options[colorIndex]);
})
