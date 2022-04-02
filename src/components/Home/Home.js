import React, { useState } from 'react';
import useProduct from '../../hooks/useProduct';
import './Home.css';
import Products from '../Products/Products';
import { Carousel } from 'react-bootstrap';
import banar from '../../images/composition-with-assorted-raw-organic-vegetables_135427-4299.webp';
import banar1 from '../../images/group-fresh-vegetables-fruits_135427-235.webp';
import banar2 from '../../images/healthy-tasty-fruits-vegetables_135427-4542.webp';
import OrderDetails from '../OrderDetails/OrderDetails';

const Home = () => {
    const [products, setProducts] = useProduct();
    const [product, setProduct] = useState([]);

    const addToBag = (id) => {
        const newProduct = [...product, id]
        setProduct(newProduct)
    }

    const removeToBag = (id) => {
        const rest = product.filter(pd => pd.id !== id.id)
        setProduct(rest)
    }

    return (
        <section>
            <div className="carousels">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banar}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banar1}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banar2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='home-container'>
                <div className="products">
                    {
                        products.map(product => <Products
                            key={product.id}
                            product={product}
                            addToBag={addToBag}
                        ></Products>)
                    }
                </div>
                <div className="order-products">
                    <OrderDetails
                        key={product.id}
                        product={product}
                        removeToBag={removeToBag}
                    ></OrderDetails>
                </div>
            </div>
        </section>

    );
};

export default Home;