export const onNavigate = (pathname) => {
  window.history.pushState({ pathname }, '', window.location.origin + pathname);
};
