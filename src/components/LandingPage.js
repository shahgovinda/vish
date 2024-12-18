import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const offerRef = useRef(null);
  const offerTeaserRef = useRef(null); // Ref for teaser
  const [offerVisible, setOfferVisible] = useState(false);

  const offers = [
    {
      id: 'offer-1',
      name: 'Exclusive Product 1',
      originalPrice: 300,
      offerPrice: 199,
      imageUrl: '/Images/door-mat.jpg', // Replace with your product image path
    },
    {
      id: 'offer-2',
      name: 'Exclusive Product 2',
      originalPrice: 280,
      offerPrice: 180,
      imageUrl: '/Images/Hazelnut.jpg', // Replace with your product image path
    },
    {
      id: 'offer-3',
      name: 'Exclusive Product 3',
      originalPrice: 280,
      offerPrice: 180,
      imageUrl: '/Images/mixdryfruit.jpg', // Replace with your product image path
    },
  ];

  const handleProductClick = (id) => {
    navigate('/shop', { state: { highlightProductId: id } });
  };

  const scrollToOffer = () => {
    if (offerRef.current) {
      offerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setOfferVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    if (offerRef.current) observer.observe(offerRef.current);

    return () => {
      if (offerRef.current) observer.unobserve(offerRef.current);
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="title">Govinda E-Shopping</h1>
        <p>Discover the best products and amazing deals, all in one place.</p>
        <Link to="/shop" className="shop-button">
          Start Shopping
        </Link>
      </div>

      {/* Teaser - Click to Scroll Down */}
      <div
        className="offer-teaser"
        onClick={scrollToOffer}
        ref={offerTeaserRef}
      >
        Catch the special offers below!
      </div>

      {/* Offer Section */}
      <div
        ref={offerRef}
        className={`featured-product ${offerVisible ? 'visible' : ''}`}
      >
        <h2>Today's Special Offers</h2>
        <div className="offers-list">
          {offers.map((offer) => (
            <div key={offer.id} className="product-card">
              <img
                src={offer.imageUrl}
                alt={offer.name}
                className="product-image"
              />
              <div className="product-details">
                <h3>{offer.name}</h3>
                <p className="original-price">
                  Original Price: <del>₹{offer.originalPrice}</del>
                </p>
                <p className="offer-price">Today's Offer: ₹{offer.offerPrice}</p>
                <button onClick={() => handleProductClick(offer.id)} className="product-link">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          /* General Styling */
          .landing-page {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(to bottom, #1c1c1c, #0a0a0a);
            color: #fff;
            overflow-x: hidden;
          }

          /* Hero Section */
          .hero-section {
            text-align: center;
            padding: 40px 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            backdrop-filter: blur(5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
            margin: 20px auto;
            max-width: 95%;
            animation: fadeIn 1.5s ease-in-out;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .title {
            font-size: 2.5em;
            color: #f9d423;
            margin-bottom: 20px;
            text-transform: uppercase;
            font-weight: bold;
          }

          .shop-button {
            font-size: 1.1em;
            font-weight: bold;
            color: #fff;
            text-decoration: none;
            background: linear-gradient(to right, #ff7e5f, #feb47b);
            padding: 12px 25px;
            border-radius: 30px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
            display: inline-block;
          }

          .shop-button:hover {
            background: linear-gradient(to left, #ff7e5f, #feb47b);
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(255, 126, 95, 0.6);
          }

          /* Offer Section */
          .featured-product {
            text-align: center;
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s ease;
            margin: 50px auto;
            max-width: 95%;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
          }

          .featured-product.visible {
            opacity: 1;
            transform: translateY(0);
          }

          .featured-product h2 {
            font-size: 2em;
            margin-bottom: 20px;
          }

          .offers-list {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            padding: 20px 0;
          }

          .product-card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
            text-align: center;
            max-width: 300px;
            width: 100%;
            transition: transform 0.3s;
            margin: 10px;
          }

          .product-card:hover {
            transform: translateY(-5px);
          }

          .product-image {
            width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: 10px;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
            margin-bottom: 15px;
          }

          .product-details {
            text-align: left;
          }

          .product-details h3 {
            font-size: 1.3em;
            color: #f9d423;
            margin-bottom: 10px;
          }

          .original-price {
            font-size: 1em;
            color: #ccc;
            margin-bottom: 5px;
          }

          .offer-price {
            font-size: 1.1em;
            color: #ff7e5f;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .product-link {
            font-size: 1em;
            color: #fff;
            text-decoration: none;
            background: linear-gradient(to right, #ff7e5f, #feb47b);
            padding: 8px 15px;
            border-radius: 20px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
          }

          .product-link:hover {
            background: linear-gradient(to left, #ff7e5f, #feb47b);
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(255, 126, 95, 0.6);
          }

          /* Teaser Animation for the Offer Section */
          .offer-teaser {
            text-align: center;
            padding: 15px;
            background-color: #ff7e5f;
            color: white;
            font-size: 1.4em;
            font-weight: bold;
            border-radius: 25px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            margin: 20px auto;
            width: 80%;
            cursor: pointer;
            animation: bounceTeaser 1.5s ease-in-out infinite;
          }

          @keyframes bounceTeaser {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
            100% {
              transform: translateY(0);
            }
          }

          /* Responsive Styling */
          @media (max-width: 768px) {
            .hero-section {
              padding: 30px 15px;
            }

            .title {
              font-size: 2em;
            }

            .product-card {
              max-width: 100%;
              margin: 10px auto;
            }

            .product-image {
              width: 100px;
              height: 100px;
            }

            .product-details h3 {
              font-size: 1.2em;
            }

            .offer-price {
              font-size: 1em;
            }

            .shop-button {
              font-size: 1em;
            }

            .offer-teaser {
              font-size: 1.2em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;
