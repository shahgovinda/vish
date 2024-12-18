import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';

const CartPage = () => {
  const location = useLocation();
  const [cart, setCart] = useState([]);
  const [paymentInitiated, setPaymentInitiated] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [countdown, setCountdown] = useState(300); // 5 minutes in seconds
  const [confirmButtonEnabled, setConfirmButtonEnabled] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [showPaymentProcessing, setShowPaymentProcessing] = useState(false);

  useEffect(() => {
    if (location.state && location.state.cart) {
      setCart(location.state.cart);
    }
  }, [location]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    if (paymentInitiated && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [paymentInitiated, countdown]);

  useEffect(() => {
    if (paymentInitiated) {
      const timer = setTimeout(() => {
        setConfirmButtonEnabled(true);
      }, 40000);
      return () => clearTimeout(timer);
    }
  }, [paymentInitiated]);

  const handleCheckout = () => {
    setPaymentInitiated(true);
  };

  const handlePaymentConfirmation = () => {
    setPaymentStatus('Payment is under processing');
    setShowPaymentProcessing(true);

    setTimeout(() => {
      setPaymentConfirmed(true);
      setShowPaymentProcessing(false);

      const generatedReceipt = {
        products: cart.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          total: item.price * item.quantity,
        })),
        total: total.toFixed(2),
        estimatedDeliveryTime: '2-3 days',
      };

      setReceipt(generatedReceipt);
    }, 4000);
  };

  const generatePDFReceipt = (generatedReceipt) => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Home Essentials - Payment Receipt', 20, 20);
    doc.setFontSize(12);
    doc.text('----------------------------------------', 20, 28);

    let yPosition = 40;
    doc.setFontSize(14);
    generatedReceipt.products.forEach((product) => {
      doc.text(`Product: ${product.name}`, 20, yPosition);
      doc.text(`Quantity: ${product.quantity}`, 120, yPosition);
      doc.text(`Price: $${product.price.toFixed(2)}`, 180, yPosition);
      doc.text(`Total: $${product.total.toFixed(2)}`, 240, yPosition);
      yPosition += 10;
    });

    doc.setFontSize(16);
    doc.setTextColor(0, 51, 102);
    doc.text(`Total Amount: $${generatedReceipt.total}`, 20, yPosition);

    yPosition += 15;
    doc.setFontSize(12);
    doc.text(`Estimated Delivery Time: ${generatedReceipt.estimatedDeliveryTime}`, 20, yPosition);

    yPosition += 20;
    doc.setFontSize(10);
    doc.text('For inquiries, contact:', 20, yPosition);
    doc.text('Phone: 7045617506', 20, yPosition + 10);
    doc.text('Email: govindashah603@gmail.com', 20, yPosition + 20);
    doc.text('All rights reserved to Home Essentials', 20, yPosition + 30);

    doc.save('receipt.pdf');
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cart.length > 0 ? (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p className="item-name">{item.name}</p>
              <p className="item-price">Price: Rs {item.price.toFixed(2)}</p>
              <p className="item-quantity">Quantity: {item.quantity}</p>
              {/* <p className="item-total">Grand Total : Rs {item.price * item.quantity}</p> */}

            </div>
          ))}
          <div className="cart-total">
            <p>Total Price:</p>
            <p>Rs {total.toFixed(2)}</p>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to Payment
          </button>

          {paymentInitiated && !paymentConfirmed && (
            <div className="payment-section">
              <h2>Complete your payment</h2>
              <p>Please pay the total amount of Rs {total.toFixed(2)} using Google Pay.</p>
              <div className="qr-code">
              <img src="/Images/qrcode.jpg" alt="Google Pay QR Code" width="200" height="200" />


              </div>
              <p>Scan this QR code with your Google Pay app to complete the payment.</p>

              <div className="countdown">
                <p>Time left to complete payment: {Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, '0')}</p>
              </div>

              <button
                onClick={handlePaymentConfirmation}
                className="payment-confirm-button"
                disabled={!confirmButtonEnabled}
              >
                Confirm Payment
              </button>
            </div>
          )}

          {paymentStatus && (
            <div className="payment-status">
              <h2>{paymentStatus}</h2>
              <p>Your order is being processed. Thank you for your purchase!</p>

              {paymentConfirmed && (
                <div className="download-section">
                  <h3>Download Receipt</h3>
                  <button onClick={() => generatePDFReceipt(receipt)}>
                    Download PDF Receipt
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <p className="empty-cart">Your cart is empty</p>
      )}

      {showPaymentProcessing && (
        <div className="payment-processing-modal">
          <div className="modal-content">
            <p>Payment is under processing...</p>
            <div className="spinner"></div>
          </div>
        </div>
      )}

<style>
  {`
    /* Global Cart Page Styling */
    .cart-page {
      padding: 40px;
      font-family: 'Arial', sans-serif;
      background-color: #000;
      color: #fff;
      min-height: 100vh;
      text-align: center;
      animation: fadeIn 1.5s ease-in-out;
    }

    .cart-page h1 {
      font-size: 4em;
      color: #4CAF50;
      margin-bottom: 30px;
      text-transform: uppercase;
      animation: slideDown 1s ease-in-out;
    }

    /* Cart Items Section */
    .cart-items {
      background-color: #111;
      border-radius: 15px;
      padding: 30px;
      margin: 0 auto;
      max-width: 800px;
      box-shadow: 0 8px 20px rgba(76, 175, 80, 0.8);
      animation: scaleIn 1.5s ease-in-out;
    }

    .cart-item {
      margin-bottom: 20px;
      font-size: 1.2em;
      color: #bbb;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #333;
      padding-bottom: 10px;
    }

    .cart-item:last-child {
      border-bottom: none;
    }

    /* Checkout Button */
    .checkout-button {
      margin-top: 20px;
      padding: 12px 24px;
      background-color: #4CAF50;
      color: #fff;
      font-size: 1.3em;
      font-weight: bold;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: transform 0.3s ease, background-color 0.3s ease;
    }

    .checkout-button:hover {
      background-color: #45a049;
      transform: translateY(-5px);
      box-shadow: 0 4px 15px rgba(76, 175, 80, 0.5);
    }

    /* Payment Section */
    .payment-section {
      background-color: #222;
      color: #fff;
      margin-top: 30px;
      border-radius: 15px;
      padding: 30px;
      text-align: center;
      box-shadow: 0 6px 20px rgba(255, 255, 255, 0.1);
      animation: slideUp 1.5s ease-in-out;
    }

    .payment-section h2 {
      color: #4CAF50;
      margin-bottom: 15px;
      font-size: 2em;
    }

    .payment-status {
      margin-top: 15px;
      font-size: 1.4em;
      color: #ddd;
    }

    .payment-confirm-button {
      margin-top: 20px;
      padding: 12px 24px;
      background-color: #007bff;
      color: white;
      font-size: 1.2em;
      font-weight: bold;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .payment-confirm-button:hover {
      background-color: #0056b3;
      transform: translateY(-5px);
      box-shadow: 0 4px 15px rgba(0, 123, 255, 0.5);
    }

    .payment-confirm-button:disabled {
      background-color: #555;
      cursor: not-allowed;
    }

    /* Payment Modal */
    .payment-processing-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.5s ease-in-out;
    }

    .modal-content {
      background-color: #fff;
      padding: 40px;
      border-radius: 15px;
      text-align: center;
      font-size: 1.5em;
      color: #333;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      animation: scaleIn 1s ease-in-out;
    }

    /* Spinner Animation */
    .spinner {
      margin: 20px auto;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #4CAF50;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
    }

    /* Keyframes */
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
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

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Mobile Responsiveness */
    @media (max-width: 768px) {
      .cart-page h1 {
        font-size: 3em;
      }

      .cart-items {
        padding: 20px;
        margin: 10px;
      }

      .checkout-button,
      .payment-confirm-button {
        width: 100%;
      }

      .modal-content {
        padding: 20px;
        font-size: 1.2em;
      }
    }

    @media (max-width: 480px) {
      .cart-page h1 {
        font-size: 2.5em;
      }

      .checkout-button {
        font-size: 1em;
      }
    }
  `}
</style>

    </div>
  );
};

export default CartPage;
