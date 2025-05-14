import styles from './Product.module.css'
import { useState } from 'react';

const Product = (props) => {

  const [title, setTitle] = useState(props.title);

  const productClickHandler = () => {
    console.log("clicked");
    setTitle('Anonymous');
  }

  return (
    <div>
      <figure onClick={productClickHandler} className={styles.product}>

        <img width={"300px"} src={props.image} alt="macbook-photo" />
        <figcaption>
          <h2 className="text-3xl font-bold my-2">{title}</h2>
          <h3 className="text-2xl font-bold my-2">{props.price}</h3>
          <p>{props.description}</p>
          <button>Buy Now</button>
        </figcaption>
        
      </figure>
    </div>
  )
}

export default Product
