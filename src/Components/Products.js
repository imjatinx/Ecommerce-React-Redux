import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../Store/cartSlice'

const Products = () => {

    const [products, setProducts] = useState([])

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
        }
        fetchProducts()
    }, [])

    const handleCardAdd = (product) => {
        dispatch(add(product))
    }

    return <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {
            products.map((product) => (
                <div key={product.id} style={{ width: '300px', height: '20%', border: '1px solid black', borderRadius: '5px', padding: '6px 4px', margin: '5px' }}>
                    <h3 style={{ textAlign: 'center' }}>
                        {product.title.split('', 10)}
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'center', height: '150px' }}>
                        <img style={{ objectFit: 'cover' }} src={product.image} alt="" />
                    </div>
                    <div>
                        <p style={{ width: '100%', textAlign: 'center' }}>
                            {product.description.split('', 50)}. . .
                        </p>
                        <p style={{ width: '100%', textAlign: 'center' }}>
                            &#8377; {product.price}
                        </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div>
                            <button
                                onClick={() => {
                                    handleCardAdd(product)
                                }}
                                style={{ padding: '10px 15px', cursor: 'pointer', background: 'green', border: 'none', borderRadius: '5px', color: 'white', fontWeight: 'bold' }}>Add to Cart</button>
                        </div>
                        <div>
                            <button style={{ padding: '10px 15px', cursor: 'pointer', background: 'green', border: 'none', borderRadius: '5px', color: 'white', fontWeight: 'bold' }}>Buy Now</button>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
}

export default Products