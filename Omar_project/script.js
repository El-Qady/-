// ==== Hide and Show
const btn = document.getElementById('btn');
const pass = document.getElementById('password');
btn.addEventListener('click',function(){
    if(pass.type==='password'){
        pass.type = 'text';
    }else{
        pass.type = 'password';
    }
})

// strength password
function Strength (password){
    let i = 0;
    if(password.length > 6){
        i++;
    }
    if(password.length >= 10){
        i++;
    }
    if(/[A-Z]/.test(password)){
        i++;
    }
    if(/[0-9]/.test(password)){
        i++;
    }
    if(/[A-Za-z0-8]/.test(password)){
        i++;
    }
    return i;
}
let container = document.querySelector('.check');
document.addEventListener("keyup",function(e){  //تنفيذ الامر اثناء الكتابه
   let password = document.querySelector('#password').value;
   let strength = Strength (password);
   if(strength <= 2){
    container.classList.add('Weak')
    container.classList.remove('medium')
    container.classList.remove('strong')
   }else if(strength >= 2 && strength <=4){
    container.classList.remove('Weak')
    container.classList.add('medium')
    container.classList.remove('strong')
   }else{
    container.classList.remove('Weak')
    container.classList.remove('medium')
    container.classList.add('strong')
   }
})

// ==========================================================================
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