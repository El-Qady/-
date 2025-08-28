const passwordBox=document.getElementById("password");
const length=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const special="!#&-@_";
const all= uppercase+lowercase+numbers+special;
function createpassword(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=special[Math.floor(Math.random()*special.length)];
    while(length>password.length){
        password+=all[Math.floor(Math.random()*all.length)];
    }
    passwordBox.value=password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
}
    // ==============================================================

let btnopen = document.querySelector('.b1');
btnopen.addEventListener('click',() => {
    window.open("http://127.0.0.1:5500/absyed/index.html",  '_blank');
})
let btnopen2 = document.querySelector('.b2');
btnopen2.addEventListener('click',() => {
    window.open("http://127.0.0.1:5500/Sign-Up/index.html",  '_blank');
})
let btnopen3 = document.querySelector('.name');
btnopen3.addEventListener('click',() => {
    window.open("http://127.0.0.1:5500/index.html",  '_blank');
})