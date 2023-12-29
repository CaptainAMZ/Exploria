export const removeQueryParameter = (param) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete(param);
  const newSearch = `?${searchParams.toString()}`;
  window.history.pushState(null, "", newSearch);
};
