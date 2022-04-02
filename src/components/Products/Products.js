import React from 'react';
import './Products.css';
import { HiOutlineCurrencyBangladeshi } from 'react-icons/hi';
import { BiShoppingBag } from 'react-icons/bi';

const Products = ({ product, addToBag }) => {
    // console.log(product);
    const { name, picture, price, quantity } = product;

    return (
        <section>
            <div className="product-container">
                <div className="product-details">
                    <img src={picture} alt="" />
                    <p title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p className="quantity-item">{quantity}</p>
                    <p className="price-item">
                        <HiOutlineCurrencyBangladeshi className="icon" />  {price}</p>
                </div>
                <div className="button-container">
                    <button onClick={() => addToBag(product)} className="button-item">
                        <BiShoppingBag></BiShoppingBag>
                        Add to Bag</button>
                </div>
            </div>
        </section>
    );
};

export default Products;