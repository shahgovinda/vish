import React from 'react';

const ContactPage = () => {
  const email = 'govindashah603@gmail.com'; // Replace with your actual email
  const phoneNumber = '+91-7045617506'; // Replace with your actual phone number

  return (
    <div className="contact-page">
      {/* Title Section */}
      <h1>Contact Us</h1>
      <p className="contact-description">
        Have any questions? We're here to help! Reach out to us anytime, and we will respond as soon as possible.
      </p>

      {/* Contact Information */}
      <div className="contact-info">
        {/* Email Section */}
        <div className="contact-item email-section">
          <div className="icon-wrapper">
            <i className="fas fa-envelope"></i>
          </div>
          <h2>Email Us</h2>
          <p>Send us an email, and we will get back to you quickly:</p>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            {email}
          </a>
        </div>

        {/* Phone Section */}
        <div className="contact-item phone-section">
          <div className="icon-wrapper">
            <i className="fas fa-phone-alt"></i>
          </div>
          <h2>Call Us</h2>
          <p>Prefer to talk? Give us a call at:</p>
          <a href={`tel:${phoneNumber}`} className="contact-link">
            {phoneNumber}
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="contact-footer">
        <p>We look forward to hearing from you and are here to help anytime!</p>
      </div>

      {/* FontAwesome Import */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      {/* CSS Styling */}
      <style>
        {`
          /* Global Container */
          .contact-page {
            background-color: #000;
            color: #fff;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-family: 'Arial', sans-serif;
            padding: 40px 20px;
          }

          .contact-page h1 {
            font-size: 4em;
            margin-bottom: 10px;
            color: #4CAF50;
            text-transform: uppercase;
            animation: fadeIn 2s ease-in-out;
          }

          .contact-description {
            font-size: 1.3em;
            margin-bottom: 30px;
            color: #ddd;
            animation: slideIn 2s ease-in-out;
          }

          /* Contact Information Container */
          .contact-info {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            margin-top: 20px;
            animation: scaleIn 1.5s ease-in-out;
          }

          .contact-item {
            background-color: #111;
            padding: 30px;
            border-radius: 15px;
            width: 300px;
            box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .contact-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 20px rgba(76, 175, 80, 0.8);
          }

          .contact-item h2 {
            font-size: 2em;
            margin: 10px 0;
            color: #4CAF50;
          }

          .contact-item p {
            font-size: 1.1em;
            margin-bottom: 10px;
            color: #bbb;
          }

          .contact-link {
            display: inline-block;
            font-size: 1.2em;
            color: #4CAF50;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .contact-link:hover {
            color: #45a049;
            text-decoration: underline;
          }

          /* Icon Styles */
          .icon-wrapper {
            font-size: 3em;
            margin-bottom: 10px;
            color: #4CAF50;
          }

          /* Footer */
          .contact-footer {
            margin-top: 40px;
            font-size: 1.1em;
            color: #ddd;
          }

          /* Animations */
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          /* Mobile Responsiveness */
          @media (max-width: 768px) {
            .contact-page h1 {
              font-size: 3em;
            }

            .contact-description {
              font-size: 1.1em;
            }

            .contact-item {
              width: 90%;
            }
          }

          @media (max-width: 480px) {
            .contact-page h1 {
              font-size: 2.5em;
            }

            .contact-description {
              font-size: 1em;
            }

            .contact-item {
              padding: 20px;
            }

            .contact-link {
              font-size: 1em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ContactPage;
