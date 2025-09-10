// get product by id for API
// https://fakestoreapi.com/products

const getProductById = async (url, id) => {
  const res = await fetch(`${url}/${id}`)
  const data = await res.json()
  return data
}
export default getProductById;