import React, { useState } from "react";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updateCartItem } from '../redux/cartAction';

const Cart = ({ cart, updateCartItem }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const Dress = [
    {
        "id":"1",
        "name": "dress2",
        "Description": " dress",
        "Total price": "20",
        "img1":"https://source.unsplash.com/random/200×300/?tall,dress",
        "img2":"https://source.unsplash.com/random/200×300/?dress",
        "img3":"https://source.unsplash.com/random/200×300/?dress,maxi",
        "size" : 
        [{
            "S":"20",
            "M":"20",
            "L":"20",
            "XL":"20"
        }
        ]
  
    },
  ];

  const history = useNavigate();
  const products = Dress;

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
         {products &&
        products.length > 0 &&
        products.map((product) => (
          <div key={product.id} className="container2">
            <img className="wom-card3" src={product.img2} />
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
                  <button onClick={() => addToCart({ Image: product.img2, name: product.name, Description: product.Description, Price: product.price })}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
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
                  <button onClick={() => addToCart({ Image: product.img3, name: product.name, Description: product.Description, Price: product.price })}>
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
