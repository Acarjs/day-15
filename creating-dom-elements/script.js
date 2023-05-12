const p = document.createElement('p');
p.className = 'main-p';
p.style.color = 'blue';

p.innerHTML = 'JavaScript';

document.body.appendChild(p);

const elementFromHTML = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.firstChild;
};

const ul = document.createElement('ul');
document.body.appendChild(ul);

const li = elementFromHTML(
  `<li class="element complex-element">A <strong>rather</strong> complex <a href="#">element</a></li>`
);

ul.appendChild(li);
