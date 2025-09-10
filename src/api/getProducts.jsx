

export const getProducts = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch data from server");
  return res.json();
}
