function submitForm(e) {
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = 'Thanks! Your message has been received. We’ll be in touch shortly.';
  status.style.color = '#84cc16';
  // For production: connect to a form backend (Netlify Forms or Formspree).
  return false;
}
