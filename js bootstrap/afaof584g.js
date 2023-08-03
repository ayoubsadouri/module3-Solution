let btn = document.querySelector('button');
btn.onclick = () => {
    let menu = document.querySelector('#menu-c');
    let h2 = document.querySelector('.content h2');
    let text = document.querySelector('.text');
    let text2 = document.querySelector('.text2');
    let text3 = document.querySelector('.text3');
    let lineB1 = document.querySelectorAll('#line-b1');
    let lineB2 = document.querySelectorAll('#line-b2');
    let lineB3 = document.querySelectorAll('#line-b3');
    let lineB4 = document.querySelectorAll('#line-b4');

    btn.style.cssText = 'background: #FFF; border: 2px solid #000;';
    menu.classList.toggle('show-hide');
    h2.classList.toggle('show-hide');
    text.classList.toggle('show-hide');
    text2.classList.toggle('show-hide');
    text3.classList.toggle('show-hide');

    lineB1.forEach(div => {
        div.classList.toggle('show-hide');
    });
    lineB2.forEach(div => {
        div.classList.toggle('show-hide');
    });
    lineB3.forEach(div => {
        div.classList.toggle('show-hide');
    });
    lineB4.forEach(div => {
        div.classList.toggle('show-hide');
    });
};