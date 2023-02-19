import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from '../Store/cartSlice';

const Cart = () => {
  const items = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const handleCardRemove = (productID) => {
    dispatch(remove(productID));
  }

  return (
    <div style={{ marginTop: '100px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Items in you Cart</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {
          items.map(item =>
            <div key={item.id} style={{ width: '300px', height: '20%', border: '1px solid black', borderRadius: '5px', padding: '6px 4px', margin: '5px' }}>
              <h3 style={{ textAlign: 'center' }}>
                {item.title.split('', 10)}
              </h3>
              <div style={{ display: 'flex', justifyContent: 'center', height: '150px', padding: '15px' }}>
                <img style={{ objectFit: 'cover' }} src={item.image} alt="" />
              </div>
              <div>
                <p style={{ width: '100%', textAlign: 'center', padding: '15px' }}>
                  &#8377; {item.price}
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                  <button
                    onClick={() => {
                      handleCardRemove(item.id)
                    }}
                    style={{ padding: '10px 15px', cursor: 'pointer', background: 'green', border: 'none', borderRadius: '5px', color: 'white' }}>Remove from Cart</button>
                </div>
                <div>
                  <button style={{ padding: '10px 15px', cursor: 'pointer', background: 'green', border: 'none', borderRadius: '5px', color: 'white' }}>Buy Now</button>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Cart