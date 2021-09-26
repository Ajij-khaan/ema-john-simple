import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    // console.log(props)

    const { name, img, seller, price, stock } = props.product;

    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p>Only {stock} stocks left</p>
                <button onClick={() => props.handleAddToCart(props.product)} className="addCart">{element} Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;