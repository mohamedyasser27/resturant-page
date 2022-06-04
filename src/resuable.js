function loadElementsIntoArray(elementSelector) {
  return Array.from(document.querySelectorAll(elementSelector));
}

function toggleClass(AddedClass, ...elements) {
  elements.forEach((element) => {
    if (Array.isArray(element)) {
      element.forEach((member) => {
        member.classList.toggle(AddedClass);
      });
    } else {
      element.classList.toggle(AddedClass);
    }
  });
}
export { loadElementsIntoArray, toggleClass };
