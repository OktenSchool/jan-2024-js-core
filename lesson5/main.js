// let h1 = document.getElementById('title');
// h1.style.background = 'silver';
// h1.textContent = 'ashd guasgdj';


let menus = document.getElementsByClassName('menu');
console.log(menus);
let ul = menus[0];
ul.classList.add('target');
// let ol = menus[1];

let lis = document.getElementsByTagName('li');
console.log(lis);

for (const li of lis) {
    console.log(li);
    li.classList.add('fw-bold');
}


