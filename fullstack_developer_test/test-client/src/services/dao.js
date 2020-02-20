const GET = async options => {
  const response = await fetch(options);
  return response.json();
};

export default {
  GET
};
