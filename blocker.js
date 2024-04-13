window.addEventListener('scroll', function() {
  const windowHeight = window.innerHeight;
  const elements = document.querySelectorAll('span');
  let viewOlderPostElement = null;

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].textContent === 'View older posts') {
      viewOlderPostElement = elements[i];
      rootElement = viewOlderPostElement?.parentElement?.parentElement?.parentElement;
      rootElement.style.border = '5px solid red'
      if (rootElement && rootElement.getBoundingClientRect().top <= windowHeight - rootElement.offsetHeight) {
        window.scrollTo(0, rootElement.offsetTop - windowHeight + rootElement.offsetHeight);
      }
    }

    if (elements[i].textContent === 'Follow' ||
      elements[i].textContent.includes('Follow') ||
      elements[i].textContent.includes('Suggested for you') ||
      elements[i].textContent.includes('Suggested Posts') ||
      elements[i].textContent.includes('Because you')) {
      viewOlderPostElement = elements[i];
      elements[i].style.border = '5px solid blue'
      rootElement = viewOlderPostElement?.parentElement?.parentElement?.parentElement;
      rootElement.style.border = '5px solid red'
      rootElement.style.visibility = 'hidden'; // Makes content invisible but keeps space
      //rootElement.style.display = 'none'; // This line hides the rootElement
    }
  }

 });

