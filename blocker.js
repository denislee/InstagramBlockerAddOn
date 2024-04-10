window.addEventListener('scroll', function() {
  const windowHeight = window.innerHeight;
  const elements = document.querySelectorAll('span');
  let viewOlderPostElement = null;

  for (let i = 0; i < elements.length; i++) {
    if (['Suggested for you', 'View older posts', 'patrocinado', 'Follow'].includes(elements[i].textContent)) {
      viewOlderPostElement = elements[i];
      break;
    }
  }

  const rootElement = viewOlderPostElement?.parentElement?.parentElement?.parentElement;
  if (rootElement && rootElement.getBoundingClientRect().top <= windowHeight - rootElement.offsetHeight) {
    rootElement.remove(); // This line replaces setting the border and modifying the maxHeight
  }
});

