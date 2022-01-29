//define variables
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');
const imgSlider = document.querySelector('.image-slider-img');
const imgText = document.querySelector('.imageText');
const body = document.querySelector('body');
let myFavs = [
    {
        showName:'Ozark',
        showImage:'https://wallpapercave.com/wp/wp5933993.jpg',
    },
        {
        showName:'The Sinner',
        showImage:'https://22dakika.org/wp-content/uploads/2021/09/ClBYXOOW-600x406.jpg',
    },
        {
        showName:'The Leftovers',
        showImage:'https://s-cdn.serienjunkies.de/n/the-leftovers.jpg',
    },
        {
        showName:'Mr.Robot',
        showImage:'https://episodedergi.com/wp-content/uploads/2016/10/mr_robot_by_carts-dak07bc-1.jpg',
    },
        {
        showName:'Mindhunter',
        showImage:'https://www.susurlukhaber.net/wp-content/uploads/2021/05/Mindhunter-1.jpg',
    },
        {
        showName:'True Detective',
        showImage:'https://img-s1.onedio.com/id-55cc93f8bfcad05f43355666/rev-0/raw/s-5c43be23ef4f2dbad36734dc356f0abe44cb77ff.jpg',
    },
        {
        showName:'Six Feet Under',
        showImage:'https://i4.hurimg.com/i/hurriyet/75/1200x675/5f582700b699de24d88b5082.jpg',
    },
];   
//define the default image
imgSlider.setAttribute('src',myFavs[0].showImage);
imgText.innerHTML = myFavs[0].showName;
body.style.backgroundColor = '#313552';
//button color change
btnRight.style.color = 'red';
btnLeft.style.color = 'red';

//define function of Image Slider
let counter=0;

btnRight.addEventListener('click',()=>{
    counter++;
    if(counter>myFavs.length-1){
        counter=0;
    }
    imgSlider.setAttribute('src',myFavs[counter].showImage);
    imgText.innerHTML = myFavs[counter].showName;
})

btnLeft.addEventListener('click',()=>{
    counter--;
    if(counter<0){
        counter = myFavs.length-1;
    }
    imgSlider.setAttribute('src',myFavs[counter].showImage);
    imgText.innerHTML = myFavs[counter].showName;
})
