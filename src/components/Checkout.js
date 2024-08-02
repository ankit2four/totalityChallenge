import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call to process payment)
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="flex flex-col md:flex-row h-full md:h-screen p-4 bg-gray-100 mt-10">
      {/* Cart Items */}
      <div className="md:w-1/2 flex flex-col overflow-y-auto p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty. Add some properties to your cart to proceed to checkout.</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="flex mb-4">
              <div className="w-24 h-24 flex-shrink-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded" />
              </div>
              <div className="ml-4 flex-grow">
                <h4 className="text-xl">{item.title}</h4>
                <p className="text-gray-700">₹{item.price.toLocaleString()} / night</p>
                <p className="text-gray-600">Booking Date: {item.bookingDate}</p>
                <p className="text-gray-600">Booking Time: {item.bookingTime}</p>
                <div className="flex items-center mt-2">
                  <button 
                    className="px-2 py-1 bg-gray-300 text-gray-700 rounded mr-2" 
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button 
                    className="px-2 py-1 bg-gray-300 text-gray-700 rounded ml-2" 
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                  <button 
                    className="ml-4 px-2 py-1 bg-red-500 text-white rounded" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
        {cart.length > 0 && (
          <div className="mt-6">
            <p className="text-xl font-semibold">Total: ₹{total.toLocaleString()}</p>
          </div>
        )}
      </div>
      
      {/* Checkout Form */}
      <div className="md:w-1/2 flex flex-col p-4 bg-white shadow-md rounded-lg mt-4 md:mt-0 md:ml-4">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        {cart.length === 0 ? (
          <p className="text-center text-lg">Please add items to your cart before proceeding to checkout.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-700">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4 flex gap-4">
              <div className="flex-1">
                <label htmlFor="expirationDate" className="block text-gray-700">Expiration Date</label>
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="cvv" className="block text-gray-700">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Complete Purchase
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Checkout;
