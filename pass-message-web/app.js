//define variables
const submitButton = document.querySelector('.submit-btn');
const textBox = document.querySelector('.text-box');
const messageBox = document.querySelector('.message-box');
const messageItems = document.querySelector('.message-items');
const body = document.querySelector('body');

body.style.backgroundColor = '#6D9886';

//define action
addMessages();

function addMessages(){
    submitButton.addEventListener('click',()=>{
        if(textBox.value===''){
            messageBox.classList.add('show');
            setTimeout(function(){
                messageBox.classList.remove('show')
            }, 1000)
        }else{
            messageItems.classList.add('show-msg-list');
            messageItems.innerHTML = textBox.value;
            textBox.value = '';
        }
    })
};
