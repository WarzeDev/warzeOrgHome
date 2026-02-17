function updateClickableImages() {
  document.querySelectorAll('img[data-full]').forEach(img => {
    console.log(img.src);

    const full = img.dataset.full;
    img.removeAttribute('data-full');

    img.addEventListener('click', e => {
      e.preventDefault();

      const container = document.createElement('div');
      const fullImg = document.createElement('img');
      container.style.display = 'none';
      fullImg.src = full;
      container.appendChild(fullImg);
      document.body.appendChild(container);

      const viewer = new Viewer(container, {
        navbar: false,
        toolbar: false,
        title: false,
        hidden() {
          viewer.destroy();
          container.remove();
        }
      });

      viewer.show();
    });
  });
}