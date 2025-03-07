let text = document.getElementById('text');
let tree2 = document.getElementById('tree2');
let tree1 = document.getElementById('tree1');
let hill3= document.getElementById('hill3');
let hill4= document.getElementById('hill4');
let hill5= document.getElementById('hill5');

window.addEventListener('scroll',() => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    tree1.style.top = value * -0.5 + 'px';
    tree1.style.left = value * 1.5 + 'px';
    hill3.style.left = value * 0.5 + 'px';
    hill3.style.top = value * 0.5 + 'px';

    hill2.style.left = value * -0.5 + 'px';
    hill2.style.top = value * 0.5 + 'px';
    hill5.style.top = value * 0.5 + 'px';
    tree2.style.top = value * 0.2 + 'px';
    hill1.style.top = value * 0.5 + 'px';
    bush.style.top = value * 0.5 + 'px';

    }); 

