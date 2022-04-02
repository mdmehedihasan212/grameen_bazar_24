import React from 'react';
import useProduct from '../../hooks/useProduct';
import './Home.css';
import Products from '../Products/Products';
import { Carousel } from 'react-bootstrap';
import banar from '../../images/ban02-1.jpg';
import banar1 from '../../images/fruit-banner.jpg';
import banar2 from '../../images/umekart_gr_1.jpeg';

const Home = () => {
    const [products, setProducts] = useProduct();

    return (
        <section className='home-container'>
            <div className="carousels">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banar}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
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