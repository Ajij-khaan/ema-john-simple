import React from 'react';

const Cart = (props) => {

    // console.log(props.cart)

    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity)
            product.quantity = 1;
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = 15;
    const tax = (total + shipping) * .10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order SUmmery</h3>
            <h3>Item Orderd {totalQuantity}</h3>
            <p>Total : {total}</p>
            <p>Shipping : {shipping}</p>
            <p>Tax : {tax}</p>
            <p>Grand Total : {grandTotal}</p>

        </div>

    );
};

export default Cart;