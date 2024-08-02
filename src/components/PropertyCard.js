import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const PropertyCard = ({ property, isInCart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const { cart } = useContext(CartContext);
  const cartItem = cart.find(item => item.id === property.id);

  // State for current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle previous image
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? property.image.length - 1 : prevIndex - 1));
  };

  // Handle next image
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === property.image.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-104 hover:shadow-xl">
      <div className="relative">
        <img 
          className="w-full h-64 object-cover" // Increased image height
          src={property.image[currentImageIndex]} 
          alt={property.title} 
        />
        <button 
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button 
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{property.title}</h3>
        <p className="text-gray-600">{property.description}</p>
        <p className="text-lg font-semibold">
          ₹{property.price.toLocaleString()} {property.transactionType === "Rent" ? "/ night" : ""}
        </p>
        <p className="text-gray-800">Location: {property.location}</p>
        <p className="text-gray-800">Type: {property.type}</p>
        <p className="text-gray-800">Rent/Buy/Lease Type: {property.transactionType}</p>
        <div className="mt-2 flex flex-wrap">
          <p className="font-semibold mr-2">Amenities:</p>
          <div className="flex flex-wrap gap-2">
            {property.amenities.map((amenity, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">{amenity}</span>
            ))}
          </div>
        </div>
        {isInCart ? (
          <div className="mt-4 flex items-center">
            <button 
              className="px-2 py-1 bg-gray-300 text-gray-700 rounded mr-2 hover:bg-gray-400 transition-colors" 
              onClick={() => decreaseQuantity(property.id)}
            >
              -
            </button>
            <span className="mx-2">{cartItem.quantity}</span>
            <button 
              className="px-2 py-1 bg-gray-300 text-gray-700 rounded ml-2 hover:bg-gray-400 transition-colors" 
              onClick={() => increaseQuantity(property.id)}
            >
              +
            </button>
            <button 
              className="ml-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors" 
              onClick={() => removeFromCart(property.id)}
            >
              Remove
            </button>
          </div>
        ) : (
          <button 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={() => addToCart(property)}
          >
            Book Now
          </button>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
