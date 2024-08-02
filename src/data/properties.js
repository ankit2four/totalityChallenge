const properties = [
  {
    id: 1,
    title: "Luxury Villa in Goa",
    description: "A stunning luxury villa with private pool and beach access in Goa. Enjoy beautiful sunsets and high-end amenities.",
    price: 2000000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601560896164-834d6f61ea66?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596481768453-8befafc2d7ae?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600376709132-33584c8ddb17?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Goa",
    type: "Villa",
    transactionType: "Buy",
    amenities: ["Pool", "Beach Access", "WiFi", "Air Conditioning"]
  },
  {
    id: 2,
    title: "Cozy Apartment in Mumbai",
    description: "A charming 2BHK apartment located in the heart of Mumbai. Close to shopping centers and public transport.",
    price: 80000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    ],
    location: "Mumbai",
    type: "Apartment",
    transactionType: "Buy",
    amenities: ["Parking", "Gym", "WiFi", "24/7 Security"]
  },
  {
    id: 3,
    title: "Beachfront Condo in Chennai",
    description: "Elegant condo with an ocean view located in Chennai. Ideal for those who love the sea and modern living.",
    price: 1500000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1604601638406-edc29b54dcf7?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1604601638406-edc29b54dcf7?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/178512843/photo/the-cottage-and-gable-small-garden-with-flowers.jpg?s=1024x1024&w=is&k=20&c=bH9R-xEVRCRhdcRqyeeIkr0MNmus2-AiOvEusiiJsx4=",
      "https://images.unsplash.com/photo-1604091789437-f2021ea5179d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0MTE4MzEwMHx8ZW58MHx8fHx8",
    ],
    location: "Chennai",
    type: "Condo",
    transactionType: "Lease",
    amenities: ["Swimming Pool", "Gym", "WiFi", "Sea View"]
  },
  {
    id: 4,
    title: "Mountain Cabin in Shimla",
    description: "A cozy mountain cabin offering breathtaking views of the Himalayas. Perfect for a peaceful getaway.",
    price: 1200000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1686090447568-6cffb31bd504?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1639074918928-23102d5d7a3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzMTAzMDM1fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1695581263294-5fc40303e955?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Shimla",
    type: "Cabin",
    transactionType: "Rent",
    amenities: ["Fireplace", "Mountain View", "WiFi", "Parking"]
  },
  {
    id: 5,
    title: "Downtown Loft in Bengaluru",
    description: "Modern loft situated in the vibrant downtown area of Bengaluru. Close to tech parks and entertainment hubs.",
    price: 90000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1645621929515-099bb957569f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9pZGElMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    location: "Bengaluru",
    type: "Loft",
    transactionType: "Buy",
    amenities: ["WiFi", "Gym", "Elevator", "24/7 Security"]
  },
  {
    id: 6,
    title: "Countryside Cottage in Coorg",
    description: "A quaint cottage nestled in the lush green hills of Coorg. Ideal for those looking for tranquility and nature.",
    price: 1500000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHwy",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",

    ],
    location: "Coorg",
    type: "Cottage",
    transactionType: "Rent",
    amenities: ["Garden", "WiFi", "Pet Friendly", "Barbecue Area"]
  },
  {
    id: 7,
    title: "Modern Studio",
    description: "A stylish studio apartment in Hyderabad's tech city. Ideal for young professionals and entrepreneurs.",
    price: 40000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1504624720567-64a41aa25d70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
      "https://images.unsplash.com/photo-1517227394671-e166629172e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
    ],
    location: "Bengaluru",
    type: "Studio",
    transactionType: "Rent",
    amenities: ["WiFi", "Gym", "Parking", "Laundry Facilities"]
  },
  {
    id: 8,
    title: "Historic Townhouse in Delhi",
    description: "An elegant historic townhouse located in the old quarters of Delhi. Rich in heritage and character.",
    price: 2000000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601560896164-834d6f61ea66?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596481768453-8befafc2d7ae?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600376709132-33584c8ddb17?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Delhi, India",
    type: "Townhouse",
    transactionType: "Buy",
    amenities: ["WiFi", "Historical Architecture", "Security", "Garden"]
  },
  {
    id: 9,
    title: "Lake House in Udaipur",
    description: "A beautiful lake house with serene views of Lake Pichola. Ideal for luxury living and relaxation.",
    price: 2500000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1715405155995-61757307e065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFrZWhvdXNlJTIwdWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://unsplash.com/photos/ancient-ruins-in-hampi-on-sunset-above-hampi-bazaar-hampi-karnataka-india-r8U9PrEotsM",
      "https://unsplash.com/photos/brown-wooden-framed-white-padded-chair-in-between-green-indoor-leaf-plants-inside-bedroom-psrloDbaZc8",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
    ],
    location: "Udaipur",
    type: "Apartment",
    transactionType: "Lease",
    amenities: ["Lake View", "Swimming Pool", "WiFi", "Private Dock"]
  },
  {
    id: 10,
    title: "Penthouse Suite in Pune",
    description: "An exclusive penthouse suite offering panoramic city views and top-notch amenities in Pune.",
    price: 3000000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1686090447568-6cffb31bd504?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1639074918928-23102d5d7a3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzMTAzMDM1fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1695581263294-5fc40303e955?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Pune",
    type: "House",
    transactionType: "Buy",
    amenities: ["Jacuzzi", "Private Terrace", "WiFi", "Gym"]
  },
  {
    id: 11,
    title: "Charming Bungalow in Jaipur",
    description: "A charming bungalow with a lush garden and traditional architecture located in Jaipur. Perfect for family living.",
    price: 1800000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHwy",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
      
    ],
    location: "Jaipur",
    type: "Bungalow",
    transactionType: "Rent",
    amenities: ["Garden", "Parking", "WiFi", "Pet Friendly"]
  },
  {
    id: 12,
    title: "Suburban Home in Noida",
    description: "A spacious home in a peaceful suburban area of Noida. Ideal for families seeking a calm environment.",
    price: 1600000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1645621929515-099bb957569f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9pZGElMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    location: "Noida",
    type: "House",
    transactionType: "Buy",
    amenities: ["Garden", "Parking", "WiFi", "Security"]
  },
  {
    id: 13,
    title: "Eco-Friendly House in Dehradun",
    description: "An environmentally conscious house with solar panels and green design elements, situated in Dehradun.",
    price: 2200000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1715405155995-61757307e065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFrZWhvdXNlJTIwdWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://unsplash.com/photos/ancient-ruins-in-hampi-on-sunset-above-hampi-bazaar-hampi-karnataka-india-r8U9PrEotsM",
      "https://unsplash.com/photos/brown-wooden-framed-white-padded-chair-in-between-green-indoor-leaf-plants-inside-bedroom-psrloDbaZc8",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
    ],
    location: "Dehradun",
    type: "House",
    transactionType: "Lease",
    amenities: ["Solar Panels", "WiFi", "Garden", "Water Recycling"]
  },
  {
    id: 14,
    title: "Riverside Cabin in Rishikesh",
    description: "A cozy riverside cabin offering serene views of the Ganges River, perfect for a relaxing retreat.",
    price: 1300000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1504624720567-64a41aa25d70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
      "https://images.unsplash.com/photo-1517227394671-e166629172e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
    ],
    location: "Dehradun",
    type: "Cabin",
    transactionType: "Rent",
    amenities: ["River View", "WiFi", "Fireplace", "Outdoor Seating"]
  },
  {
    id: 15,
    title: "City Apartment in Gurgaon",
    description: "A modern 1BHK apartment located in Gurgaon with easy access to corporate offices and shopping malls.",
    price: 70000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    ],
    location: "Gurgaon",
    type: "Apartment",
    transactionType: "Buy",
    amenities: ["WiFi", "Parking", "Gym", "24/7 Security"]
  },
  {
    id: 16,
    title: "Luxury Penthouse in Ahmedabad",
    description: "A luxurious penthouse with stunning city views and top-tier amenities located in Ahmedabad.",
    price: 2800000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1645621929515-099bb957569f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9pZGElMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    location: "Gurgaon",
    type: "Penthouse",
    transactionType: "Rent",
    amenities: ["Jacuzzi", "Private Terrace", "WiFi", "Pool"]
  },
  {
    id: 17,
    title: "Cottage by the Sea in Kerala",
    description: "A charming seaside cottage offering breathtaking views of the Arabian Sea, perfect for a peaceful retreat.",
    price: 2500000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1604601638406-edc29b54dcf7?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1604601638406-edc29b54dcf7?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/178512843/photo/the-cottage-and-gable-small-garden-with-flowers.jpg?s=1024x1024&w=is&k=20&c=bH9R-xEVRCRhdcRqyeeIkr0MNmus2-AiOvEusiiJsx4=",
      "https://images.unsplash.com/photo-1604091789437-f2021ea5179d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0MTE4MzEwMHx8ZW58MHx8fHx8",
    ],
    location: "Gurgaon",
    type: "House",
    transactionType: "Buy",
    amenities: ["Sea View", "WiFi", "Garden", "Air Conditioning"]
  },
  {
    id: 18,
    title: "Urban Loft in Kolkata",
    description: "A trendy urban loft in the heart of Kolkata, close to major cultural and business centers.",
    price: 95000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601560896164-834d6f61ea66?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596481768453-8befafc2d7ae?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600376709132-33584c8ddb17?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Kerala",
    type: "Apartment",
    transactionType: "Rent",
    amenities: ["WiFi", "Gym", "Parking", "Rooftop Access"]
  },
  {
    id: 19,
    title: "Heritage Mansion in Lucknow",
    description: "A grand heritage mansion with opulent interiors and historical significance located in Lucknow.",
    price: 3500000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1715405155995-61757307e065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFrZWhvdXNlJTIwdWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://unsplash.com/photos/ancient-ruins-in-hampi-on-sunset-above-hampi-bazaar-hampi-karnataka-india-r8U9PrEotsM",
      "https://unsplash.com/photos/brown-wooden-framed-white-padded-chair-in-between-green-indoor-leaf-plants-inside-bedroom-psrloDbaZc8",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
    ],
    location: "Lucknow",
    type: "Mansion",
    transactionType: "Buy",
    amenities: ["Historical Architecture", "WiFi", "Garden", "Security"]
  },
  {
    id: 20,
    title: "Modern Duplex in Chandigarh",
    description: "A spacious and modern duplex located in Chandigarh, featuring contemporary design and amenities.",
    price: 1800000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601560896164-834d6f61ea66?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596481768453-8befafc2d7ae?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600376709132-33584c8ddb17?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Chandigarh",
    type: "Duplex",
    transactionType: "Rent",
    amenities: ["WiFi", "Parking", "Gym", "24/7 Security"]
  },
  {
    id: 21,
    title: "Lake House in Udaipur",
    description: "A beautiful lake house with serene views of Lake Pichola. Ideal for luxury living and relaxation.",
    price: 2500000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1715405155995-61757307e065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFrZWhvdXNlJTIwdWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://unsplash.com/photos/ancient-ruins-in-hampi-on-sunset-above-hampi-bazaar-hampi-karnataka-india-r8U9PrEotsM",
      "https://unsplash.com/photos/brown-wooden-framed-white-padded-chair-in-between-green-indoor-leaf-plants-inside-bedroom-psrloDbaZc8",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
    ],
    location: "Udaipur",
    type: "Duplex",
    transactionType: "Lease",
    amenities: ["Lake View", "Swimming Pool", "WiFi", "Private Dock"]
  },
  {
    id: 22,
    title: "Penthouse Suite in Pune",
    description: "An exclusive penthouse suite offering panoramic city views and top-notch amenities in Pune.",
    price: 3000000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1686090447568-6cffb31bd504?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1639074918928-23102d5d7a3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzMTAzMDM1fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1695581263294-5fc40303e955?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Pune",
    type: "Penthouse",
    transactionType: "Buy",
    amenities: ["Jacuzzi", "Private Terrace", "WiFi", "Gym"]
  },
  {
    id: 23,
    title: "Charming Bungalow in Jaipur",
    description: "A charming bungalow with a lush garden and traditional architecture located in Jaipur. Perfect for family living.",
    price: 1800000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHwy",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
      
    ],
    location: "Jaipur",
    type: "Bungalow",
    transactionType: "Rent",
    amenities: ["Garden", "Parking", "WiFi", "Pet Friendly"]
  },
  {
    id: 24,
    title: "Suburban Home in Noida",
    description: "A spacious home in a peaceful suburban area of Noida. Ideal for families seeking a calm environment.",
    price: 1600000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1645621929515-099bb957569f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9pZGElMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    location: "Noida",
    type: "Home",
    transactionType: "Buy",
    amenities: ["Garden", "Parking", "WiFi", "Security"]
  },
  {
    id: 25,
    title: "Eco-Friendly House in Dehradun",
    description: "An environmentally conscious house with solar panels and green design elements, situated in Dehradun.",
    price: 2200000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1715405155995-61757307e065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFrZWhvdXNlJTIwdWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://unsplash.com/photos/ancient-ruins-in-hampi-on-sunset-above-hampi-bazaar-hampi-karnataka-india-r8U9PrEotsM",
      "https://unsplash.com/photos/brown-wooden-framed-white-padded-chair-in-between-green-indoor-leaf-plants-inside-bedroom-psrloDbaZc8",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
    ],
    location: "Dehradun",
    type: "House",
    transactionType: "Lease",
    amenities: ["Solar Panels", "WiFi", "Garden", "Water Recycling"]
  },
  {
    id: 26,
    title: "Riverside Cabin in Rishikesh",
    description: "A cozy riverside cabin offering serene views of the Ganges River, perfect for a relaxing retreat.",
    price: 1300000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1504624720567-64a41aa25d70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
      "https://images.unsplash.com/photo-1517227394671-e166629172e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
    ],
    location: "Dehradun",
    type: "Cabin",
    transactionType: "Rent",
    amenities: ["River View", "WiFi", "Fireplace", "Outdoor Seating"]
  },
  {
    id: 27,
    title: "City Apartment in Gurgaon",
    description: "A modern 1BHK apartment located in Gurgaon with easy access to corporate offices and shopping malls.",
    price: 70000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    ],
    location: "Gurgaon",
    type: "Apartment",
    transactionType: "Buy",
    amenities: ["WiFi", "Parking", "Gym", "24/7 Security"]
  },
  {
    id: 28,
    title: "Luxury Villa in Goa",
    description: "A stunning luxury villa with private pool and beach access in Goa. Enjoy beautiful sunsets and high-end amenities.",
    price: 2000000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601560896164-834d6f61ea66?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596481768453-8befafc2d7ae?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600376709132-33584c8ddb17?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Goa",
    type: "Villa",
    transactionType: "Buy",
    amenities: ["Pool", "Beach Access", "WiFi", "Air Conditioning"]
  },
  {
    id: 29,
    title: "Cozy Apartment in Mumbai",
    description: "A charming 2BHK apartment located in the heart of Mumbai. Close to shopping centers and public transport.",
    price: 80000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    ],
    location: "Mumbai",
    type: "2BHK Apartment",
    transactionType: "Buy",
    amenities: ["Parking", "Gym", "WiFi", "24/7 Security"]
  },
  {
    id: 30,
    title: "Beachfront Condo in Chennai",
    description: "Elegant condo with an ocean view located in Chennai. Ideal for those who love the sea and modern living.",
    price: 1500000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1604601638406-edc29b54dcf7?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1604601638406-edc29b54dcf7?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/178512843/photo/the-cottage-and-gable-small-garden-with-flowers.jpg?s=1024x1024&w=is&k=20&c=bH9R-xEVRCRhdcRqyeeIkr0MNmus2-AiOvEusiiJsx4=",
      "https://images.unsplash.com/photo-1604091789437-f2021ea5179d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0MTE4MzEwMHx8ZW58MHx8fHx8",
    ],
    location: "Chennai",
    type: "Condo",
    transactionType: "Lease",
    amenities: ["Swimming Pool", "Gym", "WiFi", "Sea View"]
  },
  {
    id: 31,
    title: "Mountain Cabin in Shimla",
    description: "A cozy mountain cabin offering breathtaking views of the Himalayas. Perfect for a peaceful getaway.",
    price: 1200000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1686090447568-6cffb31bd504?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1639074918928-23102d5d7a3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzMTAzMDM1fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1695581263294-5fc40303e955?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Shimla",
    type: "Cabin",
    transactionType: "Rent",
    amenities: ["Fireplace", "Mountain View", "WiFi", "Parking"]
  },
  {
    id: 32,
    title: "Downtown Loft in Bengaluru",
    description: "Modern loft situated in the vibrant downtown area of Bengaluru. Close to tech parks and entertainment hubs.",
    price: 90000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1645621929515-099bb957569f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9pZGElMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    location: "Bengaluru",
    type: "Loft",
    transactionType: "Buy",
    amenities: ["WiFi", "Gym", "Elevator", "24/7 Security"]
  },
  {
    id: 33,
    title: "Countryside Cottage in Coorg",
    description: "A quaint cottage nestled in the lush green hills of Coorg. Ideal for those looking for tranquility and nature.",
    price: 1500000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHwy",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",

    ],
    location: "Coorg",
    type: "Cottage",
    transactionType: "Rent",
    amenities: ["Garden", "WiFi", "Pet Friendly", "Barbecue Area"]
  },
  {
    id: 34,
    title: "Modern Studio in Hyderabad",
    description: "A stylish studio apartment in Hyderabad's tech city. Ideal for young professionals and entrepreneurs.",
    price: 40000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1504624720567-64a41aa25d70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
      "https://images.unsplash.com/photo-1517227394671-e166629172e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
    ],
    location: "Kerala",
    type: "Studio",
    transactionType: "Rent",
    amenities: ["WiFi", "Gym", "Parking", "Laundry Facilities"]
  },
  {
    id: 35,
    title: "Historic Townhouse in Delhi",
    description: "An elegant historic townhouse located in the old quarters of Delhi. Rich in heritage and character.",
    price: 2000000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601560896164-834d6f61ea66?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596481768453-8befafc2d7ae?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600376709132-33584c8ddb17?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Delhi",
    type: "Townhouse",
    transactionType: "Buy",
    amenities: ["WiFi", "Historical Architecture", "Security", "Garden"]
  },
  {
    id: 36,
    title: "Luxury Villa in Goa",
    description: "A stunning luxury villa with private pool and beach access in Goa. Enjoy beautiful sunsets and high-end amenities.",
    price: 2000000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601560896164-834d6f61ea66?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596481768453-8befafc2d7ae?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600376709132-33584c8ddb17?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Goa",
    type: "Villa",
    transactionType: "Buy",
    amenities: ["Pool", "Beach Access", "WiFi", "Air Conditioning"]
  },
  {
    id: 37,
    title: "Cozy Apartment in Mumbai",
    description: "A charming 2BHK apartment located in the heart of Mumbai. Close to shopping centers and public transport.",
    price: 80000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    ],
    location: "Mumbai",
    type: "2BHK Apartment",
    transactionType: "Buy",
    amenities: ["Parking", "Gym", "WiFi", "24/7 Security"]
  },
  {
    id: 38,
    title: "Beachfront Condo in Chennai",
    description: "Elegant condo with an ocean view located in Chennai. Ideal for those who love the sea and modern living.",
    price: 1500000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1604601638406-edc29b54dcf7?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1604601638406-edc29b54dcf7?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/178512843/photo/the-cottage-and-gable-small-garden-with-flowers.jpg?s=1024x1024&w=is&k=20&c=bH9R-xEVRCRhdcRqyeeIkr0MNmus2-AiOvEusiiJsx4=",
      "https://images.unsplash.com/photo-1604091789437-f2021ea5179d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0MTE4MzEwMHx8ZW58MHx8fHx8",
    ],
    location: "Chennai",
    type: "Condo",
    transactionType: "Lease",
    amenities: ["Swimming Pool", "Gym", "WiFi", "Sea View"]
  },
  {
    id: 39,
    title: "Mountain Cabin in Shimla",
    description: "A cozy mountain cabin offering breathtaking views of the Himalayas. Perfect for a peaceful getaway.",
    price: 1200000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1686090447568-6cffb31bd504?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1639074918928-23102d5d7a3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzMTAzMDM1fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1695581263294-5fc40303e955?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Shimla",
    type: "Cabin",
    transactionType: "Rent",
    amenities: ["Fireplace", "Mountain View", "WiFi", "Parking"]
  },
  {
    id: 40,
    title: "Downtown Loft in Bengaluru",
    description: "Modern loft situated in the vibrant downtown area of Bengaluru. Close to tech parks and entertainment hubs.",
    price: 90000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1645621929515-099bb957569f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9pZGElMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    location: "Bengaluru",
    type: "Loft",
    transactionType: "Buy",
    amenities: ["WiFi", "Gym", "Elevator", "24/7 Security"]
  },
  {
    id: 41,
    title: "Countryside Cottage in Coorg",
    description: "A quaint cottage nestled in the lush green hills of Coorg. Ideal for those looking for tranquility and nature.",
    price: 1500000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHwy",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",

    ],
    location: "Coorg",
    type: "Cottage",
    transactionType: "Rent",
    amenities: ["Garden", "WiFi", "Pet Friendly", "Barbecue Area"]
  },
  {
    id: 42,
    title: "Modern Studio in Hyderabad",
    description: "A stylish studio apartment in Hyderabad's tech city. Ideal for young professionals and entrepreneurs.",
    price: 40000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1504624720567-64a41aa25d70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
      "https://images.unsplash.com/photo-1517227394671-e166629172e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
    ],
    location: "Bengaluru",
    type: "Studio",
    transactionType: "Rent",
    amenities: ["WiFi", "Gym", "Parking", "Laundry Facilities"]
  },
  {
    id: 43,
    title: "Historic Townhouse in Delhi",
    description: "An elegant historic townhouse located in the old quarters of Delhi. Rich in heritage and character.",
    price: 2000000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601560896164-834d6f61ea66?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596481768453-8befafc2d7ae?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600376709132-33584c8ddb17?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Delhi",
    type: "Townhouse",
    transactionType: "Buy",
    amenities: ["WiFi", "Historical Architecture", "Security", "Garden"]
  },
  {
    id: 44,
    title: "Lake House in Udaipur",
    description: "A beautiful lake house with serene views of Lake Pichola. Ideal for luxury living and relaxation.",
    price: 2500000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1715405155995-61757307e065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFrZWhvdXNlJTIwdWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://unsplash.com/photos/ancient-ruins-in-hampi-on-sunset-above-hampi-bazaar-hampi-karnataka-india-r8U9PrEotsM",
      "https://unsplash.com/photos/brown-wooden-framed-white-padded-chair-in-between-green-indoor-leaf-plants-inside-bedroom-psrloDbaZc8",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
    ],
    location: "Udaipur",
    type: "Lake House",
    transactionType: "Lease",
    amenities: ["Lake View", "Swimming Pool", "WiFi", "Private Dock"]
  },
  {
    id: 45,
    title: "Penthouse Suite in Pune",
    description: "An exclusive penthouse suite offering panoramic city views and top-notch amenities in Pune.",
    price: 3000000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1686090447568-6cffb31bd504?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1639074918928-23102d5d7a3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzMTAzMDM1fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1695581263294-5fc40303e955?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Pune",
    type: "Penthouse",
    transactionType: "Buy",
    amenities: ["Jacuzzi", "Private Terrace", "WiFi", "Gym"]
  },
  {
    id: 46,
    title: "Charming Bungalow in Jaipur",
    description: "A charming bungalow with a lush garden and traditional architecture located in Jaipur. Perfect for family living.",
    price: 1800000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHwy",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
      
    ],
    location: "Jaipur",
    type: "Bungalow",
    transactionType: "Rent",
    amenities: ["Garden", "Parking", "WiFi", "Pet Friendly"]
  },
  {
    id: 47,
    title: "Suburban Home in Noida",
    description: "A spacious home in a peaceful suburban area of Noida. Ideal for families seeking a calm environment.",
    price: 1600000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1645621929515-099bb957569f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9pZGElMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    location: "Noida",
    type: "Home",
    transactionType: "Buy",
    amenities: ["Garden", "Parking", "WiFi", "Security"]
  },
  {
    id: 48,
    title: "Eco-Friendly House in Dehradun",
    description: "An environmentally conscious house with solar panels and green design elements, situated in Dehradun.",
    price: 2200000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1715405155995-61757307e065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFrZWhvdXNlJTIwdWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://unsplash.com/photos/ancient-ruins-in-hampi-on-sunset-above-hampi-bazaar-hampi-karnataka-india-r8U9PrEotsM",
      "https://unsplash.com/photos/brown-wooden-framed-white-padded-chair-in-between-green-indoor-leaf-plants-inside-bedroom-psrloDbaZc8",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
    ],
    location: "Dehradun",
    type: "House",
    transactionType: "Lease",
    amenities: ["Solar Panels", "WiFi", "Garden", "Water Recycling"]
  },
  {
    id: 49,
    title: "Riverside Cabin in Rishikesh",
    description: "A cozy riverside cabin offering serene views of the Ganges River, perfect for a relaxing retreat.",
    price: 1300000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1504624720567-64a41aa25d70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
      "https://images.unsplash.com/photo-1517227394671-e166629172e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
    ],
    location: "Dehradun",
    type: "Cabin",
    transactionType: "Rent",
    amenities: ["River View", "WiFi", "Fireplace", "Outdoor Seating"]
  },
  {
    id: 50,
    title: "City Apartment in Gurgaon",
    description: "A modern 1BHK apartment located in Gurgaon with easy access to corporate offices and shopping malls.",
    price: 70000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    ],
    location: "Gurgaon",
    type: "Apartment",
    transactionType: "Buy",
    amenities: ["WiFi", "Parking", "Gym", "24/7 Security"]
  },
  {
    id: 51,
    title: "Luxury Penthouse in Ahmedabad",
    description: "A luxurious penthouse with stunning city views and top-tier amenities located in Ahmedabad.",
    price: 2800000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1645621929515-099bb957569f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9pZGElMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    location: "Lucknow",
    type: "Penthouse",
    transactionType: "Rent",
    amenities: ["Jacuzzi", "Private Terrace", "WiFi", "Pool"]
  },
  {
    id: 52,
    title: "Cottage by the Sea in Kerala",
    description: "A charming seaside cottage offering breathtaking views of the Arabian Sea, perfect for a peaceful retreat.",
    price: 2500000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1604601638406-edc29b54dcf7?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1604601638406-edc29b54dcf7?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/178512843/photo/the-cottage-and-gable-small-garden-with-flowers.jpg?s=1024x1024&w=is&k=20&c=bH9R-xEVRCRhdcRqyeeIkr0MNmus2-AiOvEusiiJsx4=",
      "https://images.unsplash.com/photo-1604091789437-f2021ea5179d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0MTE4MzEwMHx8ZW58MHx8fHx8",
    ],
    location: "Kerala",
    type: "Cottage",
    transactionType: "Buy",
    amenities: ["Sea View", "WiFi", "Garden", "Air Conditioning"]
  },
  {
    id: 53,
    title: "Urban Loft in Kolkata",
    description: "A trendy urban loft in the heart of Kolkata, close to major cultural and business centers.",
    price: 95000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601560896164-834d6f61ea66?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596481768453-8befafc2d7ae?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600376709132-33584c8ddb17?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Kerala",
    type: "Loft",
    transactionType: "Rent",
    amenities: ["WiFi", "Gym", "Parking", "Rooftop Access"]
  },
  {
    id: 54,
    title: "Heritage Mansion in Lucknow",
    description: "A grand heritage mansion with opulent interiors and historical significance located in Lucknow.",
    price: 3500000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1715405155995-61757307e065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFrZWhvdXNlJTIwdWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://unsplash.com/photos/ancient-ruins-in-hampi-on-sunset-above-hampi-bazaar-hampi-karnataka-india-r8U9PrEotsM",
      "https://unsplash.com/photos/brown-wooden-framed-white-padded-chair-in-between-green-indoor-leaf-plants-inside-bedroom-psrloDbaZc8",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
    ],
    location: "Lucknow",
    type: "Mansion",
    transactionType: "Buy",
    amenities: ["Historical Architecture", "WiFi", "Garden", "Security"]
  },
  {
    id: 55,
    title: "Modern Duplex in Chandigarh",
    description: "A spacious and modern duplex located in Chandigarh, featuring contemporary design and amenities.",
    price: 1800000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601560896164-834d6f61ea66?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596481768453-8befafc2d7ae?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600376709132-33584c8ddb17?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Chandigarh",
    type: "Duplex",
    transactionType: "Rent",
    amenities: ["WiFi", "Parking", "Gym", "24/7 Security"]
  },
  {
    id: 56,
    title: "Lake House in Udaipur",
    description: "A beautiful lake house with serene views of Lake Pichola. Ideal for luxury living and relaxation.",
    price: 2500000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1715405155995-61757307e065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFrZWhvdXNlJTIwdWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://unsplash.com/photos/ancient-ruins-in-hampi-on-sunset-above-hampi-bazaar-hampi-karnataka-india-r8U9PrEotsM",
      "https://unsplash.com/photos/brown-wooden-framed-white-padded-chair-in-between-green-indoor-leaf-plants-inside-bedroom-psrloDbaZc8",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
    ],
    location: "Udaipur",
    type: "Lake House",
    transactionType: "Lease",
    amenities: ["Lake View", "Swimming Pool", "WiFi", "Private Dock"]
  },
  {
    id: 57,
    title: "Penthouse Suite in Pune",
    description: "An exclusive penthouse suite offering panoramic city views and top-notch amenities in Pune.",
    price: 3000000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1686090447568-6cffb31bd504?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1639074918928-23102d5d7a3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzMTAzMDM1fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1695581263294-5fc40303e955?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Pune",
    type: "Penthouse",
    transactionType: "Buy",
    amenities: ["Jacuzzi", "Private Terrace", "WiFi", "Gym"]
  },
  {
    id: 58,
    title: "Charming Bungalow in Jaipur",
    description: "A charming bungalow with a lush garden and traditional architecture located in Jaipur. Perfect for family living.",
    price: 1800000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHwy",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
      
    ],
    location: "Jaipur",
    type: "Bungalow",
    transactionType: "Rent",
    amenities: ["Garden", "Parking", "WiFi", "Pet Friendly"]
  },
  {
    id: 59,
    title: "Suburban Home in Noida",
    description: "A spacious home in a peaceful suburban area of Noida. Ideal for families seeking a calm environment.",
    price: 1600000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1645621929515-099bb957569f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9pZGElMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    location: "Noida",
    type: "Home",
    transactionType: "Buy",
    amenities: ["Garden", "Parking", "WiFi", "Security"]
  },
  {
    id: 60,
    title: "Eco-Friendly House in Dehradun",
    description: "An environmentally conscious house with solar panels and green design elements, situated in Dehradun.",
    price: 2200000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1715405155995-61757307e065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFrZWhvdXNlJTIwdWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://unsplash.com/photos/ancient-ruins-in-hampi-on-sunset-above-hampi-bazaar-hampi-karnataka-india-r8U9PrEotsM",
      "https://unsplash.com/photos/brown-wooden-framed-white-padded-chair-in-between-green-indoor-leaf-plants-inside-bedroom-psrloDbaZc8",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
    ],
    location: "Dehradun",
    type: "House",
    transactionType: "Lease",
    amenities: ["Solar Panels", "WiFi", "Garden", "Water Recycling"]
  },
  {
    id: 61,
    title: "Riverside Cabin in Rishikesh",
    description: "A cozy riverside cabin offering serene views of the Ganges River, perfect for a relaxing retreat.",
    price: 1300000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1504624720567-64a41aa25d70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
      "https://images.unsplash.com/photo-1517227394671-e166629172e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
    ],
    location: "Rishikesh, India",
    type: "Cabin",
    transactionType: "Rent",
    amenities: ["River View", "WiFi", "Fireplace", "Outdoor Seating"]
  },
  {
    id: 62,
    title: "City Apartment in Gurgaon",
    description: "A modern 1BHK apartment located in Gurgaon with easy access to corporate offices and shopping malls.",
    price: 70000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    ],
    location: "Gurgaon",
    type: "Apartment",
    transactionType: "Buy",
    amenities: ["WiFi", "Parking", "Gym", "24/7 Security"]
  },
  {
    id: 63,
    title: "Luxury Villa in Goa",
    description: "A stunning luxury villa with private pool and beach access in Goa. Enjoy beautiful sunsets and high-end amenities.",
    price: 2000000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601560896164-834d6f61ea66?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596481768453-8befafc2d7ae?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600376709132-33584c8ddb17?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Goa",
    type: "Villa",
    transactionType: "Buy",
    amenities: ["Pool", "Beach Access", "WiFi", "Air Conditioning"]
  },
  {
    id: 64,
    title: "Cozy Apartment in Mumbai",
    description: "A charming 2BHK apartment located in the heart of Mumbai. Close to shopping centers and public transport.",
    price: 80000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    ],
    location: "Mumbai, India",
    type: "Apartment",
    transactionType: "Buy",
    amenities: ["Parking", "Gym", "WiFi", "24/7 Security"]
  },
  {
    id: 65,
    title: "Beachfront Condo in Chennai",
    description: "Elegant condo with an ocean view located in Chennai. Ideal for those who love the sea and modern living.",
    price: 1500000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1604601638406-edc29b54dcf7?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1604601638406-edc29b54dcf7?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/178512843/photo/the-cottage-and-gable-small-garden-with-flowers.jpg?s=1024x1024&w=is&k=20&c=bH9R-xEVRCRhdcRqyeeIkr0MNmus2-AiOvEusiiJsx4=",
      "https://images.unsplash.com/photo-1604091789437-f2021ea5179d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0MTE4MzEwMHx8ZW58MHx8fHx8",
    ],
    location: "Chennai",
    type: "Condo",
    transactionType: "Lease",
    amenities: ["Swimming Pool", "Gym", "WiFi", "Sea View"]
  },
  {
    id: 67,
    title: "Mountain Cabin in Shimla",
    description: "A cozy mountain cabin offering breathtaking views of the Himalayas. Perfect for a peaceful getaway.",
    price: 1200000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1686090447568-6cffb31bd504?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1639074918928-23102d5d7a3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzMTAzMDM1fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1695581263294-5fc40303e955?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Shimla",
    type: "Cabin",
    transactionType: "Rent",
    amenities: ["Fireplace", "Mountain View", "WiFi", "Parking"]
  },
  {
    id: 68,
    title: "Downtown Loft in Bengaluru",
    description: "Modern loft situated in the vibrant downtown area of Bengaluru. Close to tech parks and entertainment hubs.",
    price: 90000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1645621929515-099bb957569f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9pZGElMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    location: "Bengaluru",
    type: "Loft",
    transactionType: "Buy",
    amenities: ["WiFi", "Gym", "Elevator", "24/7 Security"]
  },
  {
    id: 69,
    title: "Countryside Cottage in Coorg",
    description: "A quaint cottage nestled in the lush green hills of Coorg. Ideal for those looking for tranquility and nature.",
    price: 1500000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHwy",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",

    ],
    location: "Coorg",
    type: "Cottage",
    transactionType: "Rent",
    amenities: ["Garden", "WiFi", "Pet Friendly", "Barbecue Area"]
  },
  {
    id: 70,
    title: "Modern Studio in Hyderabad",
    description: "A stylish studio apartment in Hyderabad's tech city. Ideal for young professionals and entrepreneurs.",
    price: 40000, // Price in Indian Rupees
    image: [
      "https://images.unsplash.com/photo-1504624720567-64a41aa25d70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
      "https://images.unsplash.com/photo-1517227394671-e166629172e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGFwYXJ0bWVudHxlbnwwfHwwfHx8Mg%3D%3D",
    ],
    location: "Delhi",
    type: "Studio",
    transactionType: "Rent",
    amenities: ["WiFi", "Gym", "Parking", "Laundry Facilities"]
  },
  {
    id: 71,
    title: "Historic Townhouse in Delhi",
    description: "An elegant historic townhouse located in the old quarters of Delhi. Rich in heritage and character.",
    price: 2000000, // Price in Indian Rupees
    image: [
      "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601560896164-834d6f61ea66?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596481768453-8befafc2d7ae?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600376709132-33584c8ddb17?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: "Delhi",
    type: "Townhouse",
    transactionType: "Buy",
    amenities: ["WiFi", "Historical Architecture", "Security", "Garden"]
  }
];

export default properties;
