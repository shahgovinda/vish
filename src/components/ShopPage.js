import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShopPage = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Pocha');
  const [categories, setCategories] = useState(['Pocha', 'Chocolate']);  // Track existing categories dynamically
  const navigate = useNavigate();

  const increaseQuantity = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const decreaseQuantity = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          return prevCart.filter((item) => item.id !== product.id); // Remove from cart if quantity is 1
        } else {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }
      }
      return prevCart;
    });
  };

  const getQuantity = (productId) => {
    const product = cart.find((item) => item.id === productId);
    return product ? product.quantity : 0;
  };

  const addToCart = () => {
    navigate('/cart', { state: { cart } });
  };

  const products = [
    { id: 1, name: 'Door-Mat1', price: 199, category: 'Pocha', image: process.env.PUBLIC_URL + '/images/door-mat.jpg' },
    { id: 2, name: 'Aamras(500gm)', price: 500, category: 'Chocolate', image: process.env.PUBLIC_URL + '/images/aamras.jpg' },
    { id: 3, name: 'Customised-Bar(15Letters)', price: 200, category: 'Chocolate', image: process.env.PUBLIC_URL + '/images/customisedbar.jpg' },
    { id: 4, name: 'Dairy Milk(2bar)', price: 60, category: 'Chocolate', image: process.env.PUBLIC_URL + '/images/dairymilk.jpg' },
    { id: 5, name: 'Hazel Nut(15pc)', price: 180, category: 'Chocolate', image: process.env.PUBLIC_URL + '/images/Hazelnut.jpg' },
    { id: 6, name: 'Mango Nutella(25pc)', price: 350, category: 'Chocolate', image: process.env.PUBLIC_URL + '/images/mangonutella.jpg' },
    { id: 7, name: 'Mix Dry Fruits(15pc)', price: 180, category: 'Chocolate', image: process.env.PUBLIC_URL + '/images/mixdryfruit.jpg' },
    { id: 8, name: 'Orange Nutella(25pc)', price: 350, category: 'Chocolate', image: process.env.PUBLIC_URL + '/images/orangenutella.jpg' },
    { id: 9, name: 'Oreo Bar(1bar)', price: 100, category: 'Chocolate', image: process.env.PUBLIC_URL + '/images/oreobar.jpg' },
    { id: 10, name: 'Oreo Fudge(15pc)', price: 180, category: 'Chocolate', image: process.env.PUBLIC_URL + '/images/oreofudge.jpg' },
    { id: 11, name: 'Oreo Truffle', price: 180, category: 'Chocolate', image: process.env.PUBLIC_URL + '/images/oreotruffle.jpg' },
    { id: 12, name: 'Pan Masala(10pc)', price: 150, category: 'Chocolate', image: process.env.PUBLIC_URL + '/images/panmasala.jpg' },
    { id: 13, name: 'Pista Nutella(25pc)', price: 350, category: 'Chocolate', image: process.env.PUBLIC_URL + '/images/pistanutella.jpg' },
    { id: 14, name: 'Roasted Almond(15pc)', price: 150, category: 'Chocolate', image: process.env.PUBLIC_URL + '/images/roastedalmond.jpg' },
    { id: 15, name: 'Royal Rose(10pc)', price: 150, category: 'Chocolate', image: process.env.PUBLIC_URL + '/images/royalrose.jpg' },
    { id: 16, name: 'Sandwich Chocolate(15pc)', price: 150, category: 'Chocolate', image: process.env.PUBLIC_URL + '/images/sandwichchocolate.jpg' },
    { id: 17, name: 'Strawberry Bites(15pc)', price: 250, category: 'Chocolate', image: process.env.PUBLIC_URL + '/images/strawberrybites.jpg' },
    { id: 18, name: 'Strawberry Nutella(25pc)', price: 350, category: 'Chocolate', image: process.env.PUBLIC_URL + '/images/strawberrynutrella.jpg' },
    { id: 19, name: 'Valentine Special(10pc)', price: 80, category: 'Chocolate', image: process.env.PUBLIC_URL + '/images/valentinespecial.jpg' },

    // New Pocha products
    { id: 20, name: 'Doormat 2', price: 199, category: 'Pocha', image: process.env.PUBLIC_URL + '/images/doormat2.jpg' },
    { id: 21, name: 'Doormat 3', price: 249, category: 'Pocha', image: process.env.PUBLIC_URL + '/images/doormat3.jpg' },
    { id: 22, name: 'Doormat 4', price: 299, category: 'Pocha', image: process.env.PUBLIC_URL + '/images/doormat4.jpg' },
    { id: 23, name: 'Doormat 5', price: 349, category: 'Pocha', image: process.env.PUBLIC_URL + '/images/doormat5.jpg' },
    { id: 24, name: 'Doormat 6', price: 399, category: 'Pocha', image: process.env.PUBLIC_URL + '/images/doormat6.jpg' },
    { id: 25, name: 'Doormat 7', price: 449, category: 'Pocha', image: process.env.PUBLIC_URL + '/images/doormat7.jpg' },
    { id: 26, name: 'Doormat 8', price: 499, category: 'Pocha', image: process.env.PUBLIC_URL + '/images/doormat8.jpg' },
    { id: 27, name: 'Doormat 9', price: 549, category: 'Pocha', image: process.env.PUBLIC_URL + '/images/doormat9.jpg' },
  ];

  // Filter products based on selected category
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="shop-page">
      <h1 className="shop-title">Shop Our Collection</h1>

      {/* Category Selector */}
      <div className="category-selector">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <div className="quantity-control">
              <button
                onClick={() => decreaseQuantity(product)}
                className="quantity-button"
              >
                -
              </button>
              <span className="quantity">{getQuantity(product.id)}</span>
              <button
                onClick={() => increaseQuantity(product)}
                className="quantity-button"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Only show Go to Cart button if there are items in the cart */}
      {cart.length > 0 && (
        <button onClick={addToCart} className="add-to-cart-button">
          Go to Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items)
        </button>
      )}

<style>
  {`
   .shop-page {
  padding: 40px;
  background-color: #000; /* Black background */
  font-family: 'Arial', sans-serif;
  text-align: center;
  color: white; /* White text for visibility */
}

.shop-title {
  font-size: 2.5em;
  margin-bottom: 30px;
  color: white; /* Ensures the title is also white */
}

.category-selector {
  margin-bottom: 20px;
}

.category-selector button {
  background-color: #333;
  border: 1px solid #555;
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 1.2em;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.category-selector button:hover,
.category-selector .active {
  background-color: #007bff;
  color: white;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.product-card {
  background-color: #222; /* Dark grey background for cards */
  width: 300px;
  margin: 15px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
  position: relative;
  overflow: hidden;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px 5px rgba(255, 255, 255, 0.4); /* Studio light glow */
}

.product-image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 15px;
  border-radius: 10px;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.1);
  filter: brightness(1.3);
}

.product-card h2 {
  font-size: 1.5em;
  color: white;
  margin-bottom: 10px;
}

.product-card p {
  font-size: 1.2em;
  color: #bbb; /* Slightly lighter grey for description */
  margin-bottom: 20px;
}

.quantity-control {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

.quantity-button {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.quantity-button:hover {
  background-color: #0056b3;
}

.quantity {
  font-size: 1.2em;
  color: white;
  width: 40px;
  text-align: center;
}

.add-to-cart-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.add-to-cart-button:hover {
  background-color: #45a049;
}

  `}
</style>





    </div>
  );
};

export default ShopPage;
