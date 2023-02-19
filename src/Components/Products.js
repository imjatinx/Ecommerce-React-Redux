import React, {
    // useState,
    useEffect
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Store/cartSlice';
import { fetchProduct } from '../Store/productSlice';
import { STATUSES } from '../Store/productSlice';

const Products = () => {

    // const [products, setProducts] = useState([])

    // initialize the dispatch hook
    const dispatch = useDispatch();

    const { data: products, status } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProduct())
        // const fetchProducts = async () => {
        //     const response = await fetch('https://fakestoreapi.com/products')
        //     const data = await response.json()
        //     setProducts(data)
        // }
        // fetchProducts()
    }, [])

    const handleCardAdd = (product) => {
        /*
        This is how we send state value in redux store
        ex: here we have used a react-redux hook useDispatch()
        to take an add() type action (which is defined in cartSlice.js) and that add() action will take product and
        go to the redux store to update the state [] to [.......]
        */
        dispatch(add(product))
    }

    const customStyle = {
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
    }

    if (status === STATUSES.LOADING) {
        return <div style={customStyle}>
            <h1>LOADING...</h1>
        </div>
    }

    if (status === STATUSES.ERROR) {
        return <div style={customStyle}>
            <h1>SOMETHING WENT WRONG!</h1>
        </div>
    }

    return <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {
            products.map((product) => (
                <div key={product.id} style={{ width: '300px', height: '20%', border: '1px solid black', borderRadius: '5px', padding: '6px 4px', margin: '5px' }}>
                    <h3 style={{ textAlign: 'center' }}>
                        {product.title.split('', 10)}
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'center', height: '150px', padding: '15px' }}>
                        <img style={{ objectFit: 'cover' }} src={product.image} alt="" />
                    </div>
                    <div>
                        <p style={{ width: '100%', textAlign: 'center' }}>
                            {product.description.split('', 50)}. . .
                        </p>
                        <p style={{ width: '100%', textAlign: 'center', padding: '15px' }}>
                            &#8377; {product.price}
                        </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div>
                            <button
                                onClick={() => {
                                    handleCardAdd(product)
                                }}
                                style={{ padding: '10px 15px', cursor: 'pointer', background: 'green', border: 'none', borderRadius: '5px', color: 'white' }}>Add to Cart</button>
                        </div>
                        <div>
                            <button style={{ padding: '10px 15px', cursor: 'pointer', background: 'green', border: 'none', borderRadius: '5px', color: 'white' }}>Buy Now</button>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
}

export default Products