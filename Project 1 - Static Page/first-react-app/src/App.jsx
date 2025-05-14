import './App.css'
import Product from './components/Product/Product'

function App() {

  const products = [
    {
      title: "Macbook Pro",
      image: "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY2Jvb2slMjBwcm98ZW58MHx8MHx8fDA%3D",
      price: "$449",
      description: "This is description of the Macbook Pro"
    },
    {
      title: "Macbook Air",
      image: "https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D",
      price: "$249",
      description: "This is description of the Macbook Air"
    },
    {
      title: "Macbook mini",
      image: "https://images.unsplash.com/photo-1655283082374-b4f9d9a5edc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjYm9vayUyMG1pbml8ZW58MHx8MHx8fDA%3D",
      price: "$149",
      description: "This is description of the Macbook Mini"
    },
  ]

  return (
    <section>
      {products.map((product, index) => {
        return (
          <Product
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        )
      })}
    </section>
  )
}

export default App
