import React, { useContext } from 'react';
import './Placeholder.css'
import { StoreContext } from '../../context/storeContext';

const Placeholder = () => {
  const {getTotalCartAmount}=useContext(StoreContext);
  return (
 
    <div>
 <form className='place-order'>
      <div className='place-order-left'>
      <p className='title'>Delivary Information</p>
      <div className='multi-fields'>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />

      </div>
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Street' />
      <div className='multi-fields'>
          <input type='text' placeholder='City' />
          <input type='text' placeholder='State' />
      </div>

      <div className='multi-fields'>
          <input type='text' placeholder='Zip Code' />
          <input type='text' placeholder='Country' />
      </div>
      <input type='text' placeholder='Number' />
      </div>
      <div className='place-order-right'>
      <div className='cart-total'>
          <h2>Cart Totals</h2>
            <div>
              <div className='cart-total-details'>
                <p>Sub Total</p>
                <p>${getTotalCartAmount()}</p>
              </div>

              <div className='cart-total-details'>
                <p>Delivery</p>
                <p>${2}</p>
              </div>
              <hr/>
              <div className='cart-total-details'>
                <b>Total</b>
                <b>${getTotalCartAmount()+2}</b>
              </div>
            </div>
            <button onClick={()=>{navigate('/order')}}>Proceed to checkout</button>
          
        </div>
      </div>
    </form>
    </div>
   
  )
}

export default Placeholder;
