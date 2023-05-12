const alerts = document.querySelectorAll('.alert');
// console.log(alerts);

alerts.forEach((alert) => {
  const dataTypes = alert.getAttribute('data-type');
});

alerts[0].classList.add('alert--error');
alerts[1].classList.add('alert--warning');
alerts[2].classList.add('alert--warning');
alerts[3].classList.add('alert--success');
