document.querySelectorAll('.card').forEach(card => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        card.classList.add('animate__animated', 'animate__zoomIn');
        observer.unobserve(card);
      }
    });
  });
});