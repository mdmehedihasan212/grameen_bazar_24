import { Button, Spinner } from 'react-bootstrap';
import SelectedOrder from '../SelectedOrder/SelectedOrder';
import './OrderDetails.css';

const OrderDetails = ({ product }) => {
    // console.log(product);
    return (
        <div>
            <h4>Order Quantity: {product.length}</h4>
            {
                product.map(selectItem => <SelectedOrder
                    key={selectItem.id}
                    selectItem={selectItem}
                // removeToBag={removeToBag}
                ></SelectedOrder>)
            }
            {/* {product.length === 0 || <h4 className='alert'>Yah!!! Yor Are Buying</h4>} */}
            {product.length !== 4 ? <h4 className='alert'>Buy For Cuppon</h4> : <button>Please Review Item</button>}
            {/* {product.length === 3 && <div>
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Balance Over
                </Button>
            </div>} */}
        </div>
    );
};

export default OrderDetails;