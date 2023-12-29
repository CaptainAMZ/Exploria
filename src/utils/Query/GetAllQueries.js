const getAllQueries = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const queryParams = [];
  for (const [key, value] of searchParams.entries()) {
    const param = {
      key: key,
      value: value,
    };
    queryParams.push(param);
  }
  return queryParams;
};

