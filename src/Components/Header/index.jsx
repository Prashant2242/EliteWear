import React, { useState } from 'react';
import "./Header.css";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartData, getProducts } from '../../Redux/Slices/productSlice';

function Header() {
    const navigate = useNavigate();
    const cart = useSelector(getCartData);
    const products = useSelector(getProducts);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        if (searchQuery.trim() !== "") {
            navigate(`/search?q=${searchQuery}`);
        }
    };

    return (
        <div className='myntra_header'>
            <div className='header_navigation'>
                <div className='header_logo' onClick={() => navigate('/')}></div>
                <div className='nav'>
                    <div className='nav_item nav_item_men' onClick={() => navigate('/')}>
                        <span>Home</span>
                    </div>
                    <div className='nav_item nav_item_women' onClick={() => navigate('/products')}>
                        <span>Items</span>
                    </div>
                </div>
            </div>
            <div className='header_nav'>
                <div className='header_search'>
                    <input
                        type='text'
                        placeholder='Search for products, brand and more'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={handleSearch} className='search_button'>Search</button>
                </div>
                <div className='header_items'>
                    <div className='header_item' onClick={() => navigate('/orders')}>
                        <i className='orders_icon'></i>
                        <span>Orders</span>
                    </div>
                    <div className='header_item' onClick={() => navigate('/wishlist')}>
                        <i className='heart_icon'></i>
                        <span>Wishlist</span>
                    </div>
                    <div className='header_item' onClick={() => navigate('/cart')}>
                        <i className='cart_icon'></i>
                        <span>Bag {cart.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;