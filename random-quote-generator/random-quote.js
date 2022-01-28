//define variables
const body = document.querySelector('body');
const btn_next = document.querySelector('.next-button');
const imgOwner = document.querySelector('.image-owner');
const quoteTextHTML = document.querySelector('.quote-text');
const quoteOwner = document.querySelector('.owner-name');

let quotes =[
    {   ownerImage : 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4Njg0ODUyOTU0NDQx/fb-tolstoy-2.jpg',
        quoteText : 'The two most powerful warriors are patience and time.',
        quoteOwner : 'Leo Tolstoy',
        bgColor : '#FF6363'
    },
    {   ownerImage : 'https://i.idefix.com/pimages/Content/Uploads/LandingPage/shakespeare/shakespeare-1.jpg',
        quoteText : 'Better three hours too soon than a minute too late.',
        quoteOwner : 'William Shakespeare',
        bgColor : '#FFAB76'
    },
    {   
        ownerImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg/1200px-Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg',
        quoteText : 'Lost time is never found again.',
        quoteOwner : 'Benjamin Franklin',
        bgColor : '#BAFFB4'
    },
    {
        ownerImage:'https://www.yenicaggazetesi.com.tr/d/other/8748.jpg',
        quoteText : 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
        quoteOwner : 'Albert Einstein',
        bgColor : '#911F27'
    },
    {   ownerImage:'https://media-cdn.t24.com.tr/media/library/2019/09/1569857533418-da-vinci.png',
        quoteText : 'Learning never exhausts the mind.',
        quoteOwner : 'Leonardo Da Vinci',
        bgColor: '#512D6D'
    },
    {   
        ownerImage:'https://celebrity.fm/wp-content/uploads/2021/08/What-did-George-Lucas-think-of-rise-of-Skywalker.jpg',
        quoteText : 'No! Try not. Do, or do not. There is no try.',
        quoteOwner : 'George Lucas',
        bgColor: '#8E2657'
    },
    {   
        ownerImage:'https://okuryazarim.com/wp-content/uploads/2020/11/picasso.jpg',
        quoteText : 'Every child is an artist. The problem is how to remain an artist once we grow up.',
        quoteOwner : 'Pablo Picasso',
        bgColor: '#DA0037'
    },
    {   
        ownerImage:'https://i.pstimaj.com/img/78/740x0/610400d866a97ce844f8ab3a.jpg',
        quoteText : 'I never paint dreams or nightmares. I paint my own reality.',
        quoteOwner : 'Frida Kahlo',
        bgColor: '#184D47'
    },
    {   
        ownerImage:'https://mymodernmet.com/wp/wp-content/uploads/2017/05/art-quotes-19.jpg',
        quoteText : 'Have no fear of perfection, you will never reach it.',
        quoteOwner : 'Salvador Dali',
        bgColor:'#EC4646'
    },
    {   
        ownerImage:'https://upload.wikimedia.org/wikipedia/commons/2/2b/Andy_Warhol_by_Jack_Mitchell.jpg',
        quoteText : 'They always say time changes things, but you actually have to change them yourself.”',
        quoteOwner : 'Andy Warhol',
        bgColor:'#30475E'
    },
]

//default
imgOwner.setAttribute('src',quotes[3].ownerImage);
quoteTextHTML.innerHTML = quotes[3].quoteText;
quoteOwner.innerHTML = quotes[3].quoteOwner;
body.style.backgroundColor = quotes[3].bgColor;

// //define movement 
moveQuotes();

function moveQuotes(){
     btn_next.addEventListener('click',()=>{
         let randomIndex = parseInt(Math.random()*quotes.length);
         imgOwner.setAttribute('src',quotes[randomIndex].ownerImage);
         quoteTextHTML.innerHTML = quotes[randomIndex].quoteText;
         quoteOwner.innerHTML = quotes[randomIndex].quoteOwner;
         body.style.backgroundColor = quotes[randomIndex].bgColor;
     })
 }

