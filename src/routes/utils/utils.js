export const scrollToElement = target => {
  const elementPosition = document
    .getElementById(target)
    .getBoundingClientRect().top;
  const appBarOffset = document.getElementById('app-bar').offsetHeight;
  const elementOffsetPosition =
    elementPosition + window.pageYOffset - appBarOffset;
  // eslint-disable-next-line no-unused-expressions
  window.scrollTo({ behavior: 'smooth', top: elementOffsetPosition });
};
