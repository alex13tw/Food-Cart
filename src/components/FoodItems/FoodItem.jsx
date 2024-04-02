import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/storeContext';

const FoodIteam = ({ id, name, price, description, image }) => {
  const { cartItem,addCart,removeFromCart} =useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className='food-item-image-container'>
        <img className='food-item-image' src={image} alt={name} />
        {!cartItem[id] ? (
          <img className='add' onClick={() =>addCart(id)} src={assets.add_icon_white} alt='Add' />
        ) : (
          <div className='food-item-counter'>
          <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} />
          {cartItem[id]}
          <img onClick={() =>addCart(id)} src={assets.add_icon_green} />
          </div>
        )}
        <div className='food-item-info'>
          <div className='food-item-name-rating'>
            <p>{name}</p>
            <img src={assets.rating_starts} alt='Rating' />
          </div>
          <p className='food-item-desc'>{description}</p>
          <p className='food-item-price'>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodIteam;
