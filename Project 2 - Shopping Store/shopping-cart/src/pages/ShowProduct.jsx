import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router';

const ShowProduct = () => {

    const { productId } = useParams();
    const { product, setProduct } = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => {
                setProduct(res.data);
            })
            .then((err) => {
                console.log(err);
            })
    }, [])

    if (!product) {
        return <p>Loading.........</p>
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 350 }}
                image={product.image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    $ {product.price}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {/* using js substring() method */}
                    {product.description && product.description.substring(0, 50)}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ShowProduct
