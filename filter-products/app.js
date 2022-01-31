filterProducts();
searchBox();

//filtering with buttons
function filterProducts(){
    const btns = document.querySelectorAll('.btns-categories');
    const productElectronics = document.querySelectorAll('.card');
    
    btns.forEach((button)=> {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter
                
            productElectronics.forEach((item)=> {
                if (filter === 'all'){
                    item.style.display = 'block'
                } else {
                    if (item.classList.contains(filter)){
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                        }
                    }
                })
            })
        })
};

//search box

function searchBox(){
    const searchBox = document.querySelector('.searchBox');
    const productElectronics = document.querySelectorAll('.card');

    searchBox.addEventListener('keyup',(e)=>{
        const searchFilter = e.target.value.toLowerCase().trim()
        productElectronics.forEach(product =>{
            if(product.textContent.includes(searchFilter)){
                product.style.display = 'block';
            }else{
                product.style.display = 'none';
            }
        })
    })
};

