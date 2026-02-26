// Inquiry modal
const modal = document.getElementById('inquiryModal');
const modalPainting = document.getElementById('modalPainting');
const formPainting = document.getElementById('formPainting');
const formSubject = document.getElementById('formSubject');
const formRedirect = document.getElementById('formRedirect');
const closeBtn = document.querySelector('.modal-close');

// Set redirect URL to current page
formRedirect.value = window.location.href;

// Open modal on inquire button click
document.querySelectorAll('.btn-inquire').forEach(btn => {
  btn.addEventListener('click', () => {
    const painting = btn.dataset.painting;
    modalPainting.textContent = painting;
    formPainting.value = painting;
    formSubject.value = `Inquiry about "${painting}" — Kwabena Lartey`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// Close modal
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});
