import React from 'react';
import './Products.css';
import { HiOutlineCurrencyBangladeshi } from 'react-icons/hi';

const Products = ({ product }) => {
    console.log(product);
    const { name, picture, price } = product;
    return (
        <section>
            <div className="product-container">
                <img src={picture} alt="" />
                <div className="product-details">
                    <p>{name}</p>
                    <p>
                        <HiOutlineCurrencyBangladeshi />  {price}</p>
                </div>
            </div>
        </section>
    );
};

export default Products;