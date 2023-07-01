import React, { useState } from "react";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updateCartItem } from '../redux/cartAction';

const Cart = ({ cart, updateCartItem }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const makeup = [
    { 
        "id":"7",
        "name": "makeup",
        "Description": "blusher",
        "Total price": "10",
        "img1":"https://source.unsplash.com/random/200×300/?blusher",
        "img2":"https://source.unsplash.com/random/200×300/?blusher",
        "img2":"https://source.unsplash.com/random/200×300/?blusher"

         
    },
    
  ];

  const history = useNavigate();
  const products = makeup;

  const handleAddToCart = (product) => {
    const item = cart.items.find((it) => it.product._id === product._id);
    const prevQuantity = item ? item.quantity : 0;
    updateCartItem({
      product,
      quantity: prevQuantity + 1,
    });
  };

  const handleCheckout = () => {
    useNavigate.push('/');
  };

  return (
    <div>
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <div key={product.id} className="container2">
            <img className="wom-card3" src={product.img1} />
            <div>
              <div src={product.Description} className="description">
                <div src={product.size} className="select">
                  <select>
                    {Array.from(Array(6), (e, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <div>
                    <select>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                  <div src={product.price} className="price">
                    Total Price: {product.price}
                  </div>
                  <button onClick={() => addToCart({ Image: product.img1, name: product.name, Description: product.Description, Price: product.price })}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      <button variant="outlined" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps, { updateCartItem })(Cart);
