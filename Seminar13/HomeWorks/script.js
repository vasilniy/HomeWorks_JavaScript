const navDropMenuEl = document.querySelector('.nav_drop_menu');
const dropMenuEl = document.querySelector('.drop_menu');

navDropMenuEl.addEventListener('click', e => {
    dropMenuEl.classList.toggle('menu_block');   
});

dropMenuEl.addEventListener('mouseleave', e =>{
    dropMenuEl.classList.add('menu_block');
});