
// export const updateQueryParameter = (param, value) => {
//   const searchParams = new URLSearchParams(window.location.search);
//   searchParams.set(param, value);
//   const newSearch = `?${searchParams.toString()}`;
//   // window.history.pushState(null, "", newSearch);
//   return newSearch
// };


export const updateQueryParam = (name, value) => {
  // create a writable copy of the current search params
  const current = new URLSearchParams(Array.from(searchParams.entries()));
  // set the new value for the query param
  current.set(name, value);
  // convert the search params to a string
  const search = current.toString();
  // add a question mark if there are any params
  const query = search ? `?${search}` : "";
  // push the new url to the router
  router.push(`${pathname}${query}`);
};
