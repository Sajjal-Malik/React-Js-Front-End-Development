import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductList from '../components/ProductList/ProductList';

const AllProducts = () => {

  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   console.log('Inside the useEffect with no Dependency Array');
  // })

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        // console.log(res.data);
        setProducts(() => res.data)
      })
      .then((err) => {
        console.log(err);
      })
  }, [])

  // useEffect(() => {
  //   console.log('Inside the useEffect with an Element inside Dependency Array');
  // }, [count])


  return (
    <div>
      {/* <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <h1>All of Our Products</h1>
        <ProductList
        key={products.id}
        products={products} />
    </div>
  )
}

export default AllProducts