const header=document.querySelector('.header')
const btnHamburger=document.querySelector('#btnHamburger')
//console.log(hamburger)
btnHamburger.addEventListener('click',(e)=>{
    header.classList.toggle('open')
})