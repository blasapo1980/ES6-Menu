'use strict'

const menuItems = [
  {name: 'Home', link:'home.html'},
  {name: 'Info', link:'info.html'},
  {name: 'About', link:'about.html'},
  {name: 'Contact', link:'contact.html'}
];

const menu = document.querySelector(".menu");
for (const name of menuItems){
  menu.innerHTML += `<li><a href="${name.link}">${name.name}</a></li>`;
}
//de esta forma imprimimos cuatro veces.

// también se podría: Sacamos la información cuatro veces pero imprimimos una:
const menuItems2 = [
{name2: 'Home', link2:'home.html'},
{name2: 'Info', link2:'info.html'},
{name2: 'About', link2:'about.html'},
{name2: 'Contact', link2:'contact.html'}
];

const menu2 = document.querySelector('.menu2');
let content = '';

for (const menuItem2 of menuItems2) {
  const {name, link} = menuItem2;
  content += `
    <li>
      <a href="${menuItem2.link2}">${menuItem2.name2}</a>
    </li>
    `;
}

menu2.innerHTML = content;
