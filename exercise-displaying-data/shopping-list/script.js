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

const btn = document.getElementById('btn');

const showItems = () => {
  const list = document.getElementById('list');
  list.innerText = '';
  items.map((item) => {
    list.innerHTML += ` <div class='item'>
      <div>${item.name}, ${item.amount}</div>  
      <button id='deleteBtn'>X</button>
    </div>
      
    `;
  });

  const deleteButtons = document.querySelectorAll('#deleteBtn');
  deleteButtons.forEach((deleteItem, index) => {
    console.log(deleteItem, index);
    deleteItem.addEventListener('click', () => {
      items.splice(index, 1);
      showItems();
    });
  });
};

const addItem = (e) => {
  const name = document.querySelector('.name__input').value;

  const amount = document.querySelector('.amount__input').value;

  items.push({
    name: name,
    amount: amount,
  });
  showItems();
  e.preventDefault();
};

btn.addEventListener('click', addItem);

showItems();
