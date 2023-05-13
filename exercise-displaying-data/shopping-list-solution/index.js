'use strict';

const items = [
  {
    name: 'bananas',
    amount: '1kg',
  },
  {
    name: 'apples',
    amount: 5,
  },
  {
    name: 'tomatos',
    amount: 10,
  },
  {
    name: 'butter',
    amount: '250g',
  },
];

const renderItems = () => {
  const listElm = document.querySelector('#list');
  listElm.innerHTML = '';
  items.forEach((item) => {
    listElm.innerHTML += `<div class="item">${item.name}, ${item.amount}</div>`;
  });
};

const btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', (e) => {
  const itemName = document.querySelector('#name-input').value;
  const itemAmount = document.querySelector('#amount-input').value;
  items.push(
    { 
      name: itemName,
      amount: itemAmount,
    }
  );
  renderItems();
  e.preventDefault();
});

renderItems();