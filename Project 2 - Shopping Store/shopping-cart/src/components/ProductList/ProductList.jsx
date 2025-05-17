import React from 'react'
import Product from '../Product/Product';
import Grid from '@mui/material/Grid';

const ProductList = (props) => {
  return (
    <div>
      <h1>Products List</h1>
      {/* Below Grid represents the number of rows agains a product */}
      <Grid container spacing={2}>
        {
          props.products.map((product) => {
            // Below Grid represents the number of columns agains a product
            return <Grid size={{ sm: 12, md: 6, lg: 3 }}>
              <Product
                id={product.id}
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            </Grid>
          })
        }
      </Grid>
    </div>
  )
}

export default ProductList;
