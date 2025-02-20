import React from "react";
import { useCart } from "../context/cartcontext";
import "../styles/productgallery.css";

const Home = ({ regularProducts }) => {
    const { addToCart } = useCart();

    return (
        <div>
            <h1 className="page-title">Home</h1>
            <div className="product-gallery">
                {regularProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-image-container">
                            <div className="price-tag">${product.price.toFixed(2)}</div>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                            />
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                            <button
                                className="add-to-cart-btn"
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
