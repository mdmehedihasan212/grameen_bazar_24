import React from 'react';
import useProduct from '../../hooks/useProduct';
import './Home.css';
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useProduct();

    return (
        <section className='home-container'>
            <div className="products-item">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                    ></Products>)
                }
            </div>
            <div className="order-products">

            </div>
        </section>
    );
};

export default Home;