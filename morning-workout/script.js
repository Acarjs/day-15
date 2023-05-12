// const padlock = document.querySelector('.padlock');
// const message = document.querySelector('.text');

// const handleClick = () => {
//   message.style.display = 'block';
//   message.className = 'padlock padlock_clicked';
//   padlock.removeEventListener('mouseenter', handleMouseEnter);
//   padlock.removeEventListener('mouseleave', handleMouseLeave);

//   if (message.className == 'padlock padlock_clicked') {
//     setTimeout(() => {
//       window.location.reload();
//     }, 4000);
//   }
// };

// const handleMouseEnter = () => {
//   message.style.display = 'block';
// };

// const handleMouseLeave = () => {
//   message.style.display = 'none';
// };

// padlock.addEventListener('click', handleClick);
// padlock.addEventListener('mouseenter', handleMouseEnter);
// padlock.addEventListener('mouseleave', handleMouseLeave);

//-------MONIKA--------

let padlock = document.querySelector('.padlock');
let text = document.querySelector('.text');

let clicked = false;

padlock.addEventListener('mouseenter', () => {
  text.className = 'text text_visible';
});

padlock.addEventListener('mouseleave', () => {
  if (!clicked) {
    //true
    text.className = 'text'; //none
  }
});

padlock.addEventListener('click', () => {
  clicked = !clicked;
  padlock.className = 'padlock padlock__clicked';
});
