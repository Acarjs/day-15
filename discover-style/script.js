const alerts = [
  'Unable to access resource. User is not authorized.',
  'You are missing proper user permissions.',
  'Administrators have been notified of this action.',
  'Please remain where you are, police is on the way.',
];

alerts.map((alert) => {
  const container = document.createElement('div');
  container.classList.add('alerts');

  document.body.appendChild(container);

  const alertDiv = document.createElement('div');
  alertDiv.classList.add('alert');

  const alertText = document.createElement('div');
  alertText.classList.add('alert__text');
  alertText.innerHTML = alert;

  const alertClose = document.createElement('div');
  alertClose.classList.add('alert__close');
  alertClose.innerHTML = '&times';

  alertDiv.appendChild(alertText);
  alertDiv.appendChild(alertClose);

  container.appendChild(alertDiv);
});
