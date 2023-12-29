export const addQueryParameter = (param, value) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.append(param, value);
  const newSearch = `?${searchParams.toString()}`;
  window.history.pushState(null, "", newSearch);
};
