document.querySelectorAll('[data-photo]').forEach(button => {
  button.addEventListener('click', () => {
    const figure = button.closest('.profile-photo');
    figure.querySelectorAll('.photo-slide').forEach(slide => { slide.hidden = slide.id !== button.dataset.photo; });
    figure.querySelectorAll('[data-photo]').forEach(dot => { dot.setAttribute('aria-pressed', String(dot === button)); });
  });
});
