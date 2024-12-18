import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* About Section */}
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Govinda E-Store!</strong> We are committed to bringing you the finest handmade products, such as
          <em> premium Pocha</em> and authentic goods that enhance your everyday life. Our mission is to deliver quality and make
          your experience delightful with every purchase.
        </p>
        <button onClick={() => alert('Learn More Coming Soon!')}>Learn More</button>
      </div>

      {/* Instagram Section */}
      <div className="instagram-section">
        <h2>Follow Us on Instagram</h2>
        <p>Get the latest updates, exclusive offers, and behind-the-scenes content!</p>
        <a
          href="https://www.instagram.com/ig_govindashah"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
            alt="Instagram"
            className="instagram-icon"
          />
          Visit Our Instagram
        </a>
      </div>

      {/* CSS Styling */}
      <style>
        {`
          /* Global Container */
          .about-page {
            padding: 40px;
            font-family: 'Arial', sans-serif;
            background-color: #000;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #fff;
            text-align: center;
          }

          /* About Section */
          .about-content h1 {
            font-size: 3.5em;
            color: #4CAF50;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 20px;
            font-weight: bold;
            animation: fadeIn 1.5s ease-in-out;
          }

          .about-content p {
            font-size: 1.2em;
            line-height: 1.8;
            max-width: 800px;
            margin: 0 auto 30px;
            color: #ddd;
            animation: slideIn 1.5s ease-in-out;
          }

          .about-content button {
            padding: 12px 24px;
            font-size: 1.2em;
            border: none;
            border-radius: 8px;
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
            box-shadow: 0 8px 12px rgba(255, 255, 255, 0.1);
            transition: transform 0.3s ease, background-color 0.3s ease;
          }

          .about-content button:hover {
            background-color: #45a049;
            transform: scale(1.05);
          }

          /* Instagram Section */
          .instagram-section {
            margin-top: 50px;
            padding: 20px;
            background-color: #111;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
            width: 100%;
            max-width: 800px;
          }

          .instagram-section h2 {
            font-size: 2.5em;
            margin-bottom: 10px;
            color: #4CAF50;
          }

          .instagram-section p {
            font-size: 1.1em;
            color: #bbb;
            margin-bottom: 20px;
          }

          .instagram-link {
            text-decoration: none;
            font-size: 1.2em;
            color: #4CAF50;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            transition: color 0.3s ease;
          }

          .instagram-link img {
            width: 30px;
            height: 30px;
            transition: transform 0.3s ease;
          }

          .instagram-link:hover img {
            transform: scale(1.2);
          }

          .instagram-link:hover {
            color: #45a049;
          }

          /* Animations */
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Responsiveness */
          @media (max-width: 768px) {
            .about-content h1 {
              font-size: 2.5em;
            }

            .about-content p {
              font-size: 1em;
            }

            .instagram-section h2 {
              font-size: 2em;
            }
          }

          @media (max-width: 480px) {
            .about-content h1 {
              font-size: 2em;
            }

            .about-content p {
              font-size: 0.9em;
            }

            .instagram-section h2 {
              font-size: 1.8em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AboutPage;
