import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import cartImage from '../cart.png';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout'); // Redirect to the CheckoutPage
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 bg-white-100 mt-10">
      <h2 className="text-2xl font-bold mb-4 mid">Cart</h2>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
          <img 
            src={cartImage}
            alt="Empty Cart" 
            className="w-32 h-32 mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Your cart is looking a bit empty!</h3>
          <p className="text-gray-700 mb-4">Add some items to your cart to proceed with checkout.</p>
          <button
            onClick={() => navigate('/')}
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Browse Properties
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md flex p-4">
              <div className="flex-shrink-0 w-24 h-24">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded" />
              </div>
              <div className="ml-4 flex-grow">
                <h4 className="text-xl font-bold">{item.title}</h4>
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
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="mt-6 text-center">
          <p className="text-xl font-semibold">Total: ₹{total.toLocaleString()}</p>
          <button
            onClick={handleCheckout}
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
