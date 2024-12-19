export const fetchCities = async () => {
  const response = await fetch('/api/proxy');
  const data = await response.json();
  return data.rajaongkir.results;
};
