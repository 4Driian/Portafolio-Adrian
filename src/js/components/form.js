function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  const name = form.get('nombre');
  const email = form.get('correo');
  const message = form.get('message');
  const mailtoLink = `mailto:az1767824@gmail.com ? subject=${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}`;
  window.location.href = mailtoLink;
}

export function setupForm() {
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', handleSubmit);
}
