const interestButton = document.getElementById('pilotInterest');
const success = document.getElementById('formSuccess');

interestButton?.addEventListener('click', () => {
  success.textContent = 'Thanks — interest recorded for this preview. Connect analytics before publishing to measure real clicks.';
  interestButton.textContent = 'Interest noted';
  interestButton.disabled = true;
});
