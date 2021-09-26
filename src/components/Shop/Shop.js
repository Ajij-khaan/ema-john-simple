import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setPorducts] = useState([])

    const [cart, setCart] = useState([]);

    const [displyProducts, setDisplayProducts] = useState([])

    useEffect(() => {
        // console.log('prodcut API Called');
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setPorducts(data)
                setDisplayProducts(data)
                // console.log('product reveived');
            });
    }, [])

    useEffect(() => {
        // console.log('LOcal Storage Claed')
        if (products.length) {

            const savedCart = getStoredCart();
            const storedCart = [];
            // console.log(savedCart);
            for (const key in savedCart) {
                console.log(key, savedCart[key]);
                const addedProduct = products.find(product => product.key == key)
                // console.log(key, addedProduct)
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart);
        }
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        //Save to Local Storage for Now
        addToDb(product.key)
    }
    // console.log(products.length)

    const handleSearch = event => {
        const searchText = (event.target.value);
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        console.log(matchedProducts.length)
        setDisplayProducts(matchedProducts)
    }


    return (
        <div>
            <div className="search-container">
                <input type="text"
                    onChange={handleSearch}
                    placeholder="Search Items" />
            </div>


            <div className="shop-container">
                <div className="product-container">
                    {
                        displyProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>

                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop; <h2>THis is shop</h2>