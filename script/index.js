function scrollMenu(){
    var menu = document.querySelector(`header`)

    if(scrollY > 0){
        menu.style.backgroundColor = 'white';
        menu.style.boxShadow = ' 1px 0px 1px black';
    }
    else{
        menu.style.backgroundColor = null;   
        menu.style.boxShadow = null;
    }
}

window.addEventListener('scroll', scrollMenu);

