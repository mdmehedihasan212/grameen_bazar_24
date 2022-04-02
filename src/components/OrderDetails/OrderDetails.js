import { Button, Spinner } from 'react-bootstrap';
import SelectedOrder from '../SelectedOrder/SelectedOrder';
import './OrderDetails.css';

const OrderDetails = ({ product, removeToBag }) => {
    // console.log(product);
    return (
        <div>
            <h4>Order Quantity: {product.length}</h4>
            {
                product.map(selectItem => <SelectedOrder
                    key={selectItem.id}
                    selectItem={selectItem}
                    removeToBag={removeToBag}
                ></SelectedOrder>)
            }
            {product.length === 0 || <p>Yah!!! Yor Are Buying</p>}
            {product.length !== 4 ? <p>Please Add For Cuppon</p> : <button>Please Review Item</button>}
            {product.length === 3 && <div>
                {/* <p>Three Item Already Added</p> */}
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
            </div>}
        </div>
    );
};

export default OrderDetails;