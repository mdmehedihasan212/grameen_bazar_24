import React from 'react';
import './Products.css';
import { HiOutlineCurrencyBangladeshi } from 'react-icons/hi';
import { BiShoppingBag } from 'react-icons/bi';

const Products = ({ product }) => {
    console.log(product);
    const { name, picture, price, quantity } = product;
    return (
        <section>
            <div className="product-container">
                <img src={picture} alt="" />
                <div className="product-details">
                    <p>{name}</p>
                    <p className="quantity-item">{quantity}</p>
                    <p className="price-item">
                        <HiOutlineCurrencyBangladeshi className="icon" />  {price}</p>
                </div>
                <div className="button-container">
                    <button className="button-item">
                        <BiShoppingBag></BiShoppingBag>
                        Add to Bag</button>
                </div>
            </div>

        </section>
    );
};

export default Products;