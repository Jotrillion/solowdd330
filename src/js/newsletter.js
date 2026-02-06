// Newsletter signup functionality

export function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('newsletter-email');
  const message = document.getElementById('newsletter-message');

  if (!form) return;

  form.addEventListener('submit', handleNewsletterSubmit);

  function handleNewsletterSubmit(e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    // Validate email format
    if (!isValidEmail(email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }

    // Store email (could be sent to backend here)
    storeNewsletterEmail(email);

    // Show success message
    showMessage('Thank you for subscribing! Check your email for confirmation.', 'success');

    // Reset form
    form.reset();
    emailInput.focus();

    // Clear message after 5 seconds
    setTimeout(() => {
      message.textContent = '';
      message.className = 'newsletter-note';
    }, 5000);
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showMessage(text, type) {
    message.textContent = text;
    message.className = `newsletter-note ${type}`;
  }

  function storeNewsletterEmail(email) {
    // Get existing newsletter emails from localStorage
    const newsletters = JSON.parse(localStorage.getItem('newsletter-emails')) || [];

    // Check if email already exists
    if (!newsletters.includes(email)) {
      newsletters.push(email);
      localStorage.setItem('newsletter-emails', JSON.stringify(newsletters));
    }
  }
}
