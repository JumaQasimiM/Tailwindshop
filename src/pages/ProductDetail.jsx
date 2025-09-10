import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function ProductDetail() {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  console.log(product.image);
  const [images, setImage] = useState({

  })
  const [activeImage, setActiveImage] = useState(images.image2)

  const [quantity, setQuantity] = useState(0)



  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()
      setProduct(data)
    }
    fetchData()
    setLoading(false)
  }, [url])


  // add to cart 
  const [stock, setStock] = useState(10)

  const addToCart = () => {
    toast.success("Product added to cart")
  }
  const addQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)

    }
    else {
      toast.error("Out of stock")
    }
  }
  const leesQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  return (

    <div className='flex flex-col justfy-between lg:flex-row lg:items-center p-6 gap-16 '>
      <div className='flex flex-col gap-6 lg:w-2/4'>
        <img src={product.image} alt={product.title}
          className='w-full h-[60vh] aspect-square object-contain rounded-md cursor-pointer p-1 bg-gray-200'
        />
        <div className='flex flex-row gap-2 justify-around h-16'>
          <img
            className='w-16 h-16 rounded-md cursor-pointer border-2 border-dashed p-1'
            src={product.image} alt={product.title} onClick={() => setActiveImage(images.image1)} />
          <img
            className='w-16 h-16 rounded-md cursor-pointer border-2 border-dashed p-1'
            src={product.image} alt={product.title} onClick={() => setActiveImage(images.image2)} />
          <img
            className='w-16 h-16 rounded-md cursor-pointer border-2 border-dashed p-1'
            src={product.image} alt={product.title} onClick={() => setActiveImage(images.image3)} />
          <img
            className='w-16 h-16 rounded-md cursor-pointer border-2 border-dashed p-1'
            src={product.image} alt={product.title} onClick={() => setActiveImage(images.image3)} />
        </div>
      </div>
      {/* About */}
      <div className='flex flex-col gap-4 lg:w-2/4'>
        <div>
          <span className='font-semibold text-valate-600'>{product.title}</span>
          <h4 className='text-gray-600 text-md font-semibold'>{product.category}</h4>
          <h3><span className='font-semibold text-orange-600'>{stock}</span> in stock</h3>
        </div>
        <p className='mt-3 text-gray-700'>
          {product.description}
        </p>
        <h3 className='font-semibold text-2xl '>${product.price}</h3>
        <div className='flex flex-col sm:flex-row md:flex-row items-center gap-4'>
          <div className='flex flex-row gap-1 items-center'>

            <button className='text-orange-900 text-lg font-semibold px-4 py-1 bg-slate-200 rounded-sm cursor-pointer' onClick={leesQuantity}> - </button>

            <span className='text-orange-900 text-xl font-semibold px-4 py-1 border border-gray-100'> {quantity} </span>

            <button className='text-orange-900 text-lg font-semibold px-4 py-1 bg-slate-200 rounded-sm cursor-pointer' onClick={addQuantity}>+</button>

          </div>
          <button className='bg-sky-600 px-6 py-1 text-white rounded-sm cursor-pointer'

            onClick={addToCart}>Add to cart</button>

        </div>
      </div>

    </div>
  )
}
