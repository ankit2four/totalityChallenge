import React, { useState, useEffect, useContext } from 'react';
import PropertyCard from './PropertyCard';
import properties from '../data/properties';
import { CartContext } from '../context/CartContext';

const ITEMS_PER_PAGE = 20;

const PropertyList = () => {
  const { cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    transactionType: '',
    amenities: [],
    priceRange: [0, 100000000], // Adjust the range as needed
  });

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let newFilteredProperties = properties;

    // Apply filters sequentially
    if (filters.location) {
      newFilteredProperties = newFilteredProperties.filter(property =>
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.type) {
      newFilteredProperties = newFilteredProperties.filter(property =>
        property.type.toLowerCase() === filters.type.toLowerCase()
      );
    }

    if (filters.transactionType) {
      newFilteredProperties = newFilteredProperties.filter(property =>
        property.transactionType.toLowerCase() === filters.transactionType.toLowerCase()
      );
    }

    if (filters.amenities.length) {
      newFilteredProperties = newFilteredProperties.filter(property =>
        filters.amenities.every(amenity => property.amenities.includes(amenity))
      );
    }

    if (filters.priceRange) {
      newFilteredProperties = newFilteredProperties.filter(property =>
        property.price >= filters.priceRange[0] && property.price <= filters.priceRange[1]
      );
    }

    setFilteredProperties(newFilteredProperties);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFilters(prevFilters => ({
        ...prevFilters,
        amenities: checked
          ? [...prevFilters.amenities, value]
          : prevFilters.amenities.filter(amenity => amenity !== value)
      }));
    } else if (name === 'priceMin' || name === 'priceMax') {
      setFilters(prevFilters => ({
        ...prevFilters,
        priceRange: [
          name === 'priceMin' ? Number(value) : prevFilters.priceRange[0],
          name === 'priceMax' ? Number(value) : prevFilters.priceRange[1]
        ]
      }));
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        [name]: value
      }));
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(filteredProperties.length / ITEMS_PER_PAGE)) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const currentProperties = filteredProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className='p-6 mt-10'>
      <div className='mb-6 flex flex-wrap gap-4'>
        <select name='location' onChange={handleFilterChange} className='border m-1 p-2'>
          <option value=''>All Locations</option>
          <option value='Goa'>Goa</option>
          <option value='Chandigarh'>Chandigarh</option>
          <option value='Delhi'>Delhi</option>
          <option value='Pune'>Pune</option>
          <option value='Mumbai'>Mumbai</option>
          <option value='Chennai'>Chennai</option>
          <option value='Shimla'>Shimla</option>
          <option value='Bengaluru'>Bengaluru</option>
          <option value='Coorg'>Coorg</option>
          <option value='Udaipur'>Udaipur</option>
          <option value='Jaipur'>Jaipur</option>
          <option value='Noida'>Noida</option>
          <option value='Dehradun'>Dehradun</option>
          <option value='Gurgaon'>Gurgaon</option>
          <option value='Kerala'>Kerala</option>
          <option value='Lucknow'>Lucknow</option>
        </select>
        <select name='type' onChange={handleFilterChange} className='border m-1 p-2'>
          <option value=''>All Types</option>
          <option value='Apartment'>Apartment</option>
          <option value='House'>House</option>
          <option value='Villa'>Villa</option>
          <option value='Penthouse'>Penthouse</option>
          <option value='Condo'>Condo</option>
          <option value='Cabin'>Cabin</option>
          <option value='Loft'>Loft</option>
          <option value='Cottage'>Cottage</option>
          <option value='Studio'>Studio</option>
          <option value='Bungalow'>Bungalow</option>
          <option value='Mansion'>Mansion</option>
          <option value='Duplex'>Duplex</option>
          
        </select>
        <select name='transactionType' onChange={handleFilterChange} className='border m-1 p-2'>
          <option value=''>Rent/Buy/Lease</option>
          <option value='Buy'>Buy</option>
          <option value='Rent'>Rent</option>
          <option value='Lease'>Lease</option>
        </select>
        <div className='flex border m-1 p-2 gap-2 overflow-auto'>
          <p>Amenities:</p>
          <label><input type='checkbox' value='WiFi' onChange={handleFilterChange} /> WiFi</label>
          <label><input type='checkbox' value='Parking' onChange={handleFilterChange} /> Parking</label>
          <label><input type='checkbox' value='Gym' onChange={handleFilterChange} /> Gym</label>
          <label><input type='checkbox' value='Elevator' onChange={handleFilterChange} /> Elevator</label>
          <label><input type='checkbox' value='Security' onChange={handleFilterChange} /> Security</label>
          <label><input type='checkbox' value='Garden' onChange={handleFilterChange} /> Garden</label>
          <label><input type='checkbox' value='Pool' onChange={handleFilterChange} /> Pool</label>
          <label><input type='checkbox' value='Fireplace' onChange={handleFilterChange} /> Fireplace</label>
        </div>
        <div className='flex border m-0 p-1'>
          <label className='p-2'>Price:</label>
          <div className='flex gap-2'>
            <input
              type='number'
              name='priceMin'
              value={filters.priceRange[0]}
              onChange={handleFilterChange}
              className='border p-1'
              placeholder='Min Price'
            />
            <input
              type='number'
              name='priceMax'
              value={filters.priceRange[1]}
              onChange={handleFilterChange}
              className='border p-1'
              placeholder='Max Price'
            />
          </div>
        </div>
        <button
          onClick={applyFilters}
          className="bg-blue-500 text-white px-3 py-2 m-1 rounded hover:bg-blue-400 active:size-90"
        >
          Apply Filters
        </button>
      </div>

      {currentProperties.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProperties.map(property => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                isInCart={cart.some(item => item.id === property.id)} 
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            ))}
          </div>

          <div className="flex justify-between items-center p-6 m-1">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="p-6 text-center">
          <p>No properties found. Looks like the property you are looking for is on vacation!</p>
        </div>
      )}
    </div>
  );
};

export default PropertyList;
