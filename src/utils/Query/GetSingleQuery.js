export const getSingleQuery = (title) => {
  const searchParams = new URLSearchParams(window.location.search);
  const query = searchParams.get(title);
  return query
};
