# Property Listing Application

## Project Overview

This project is a React-based application for listing and filtering real estate properties. It allows users to view properties based on various filters such as location, type, transaction type, amenities, and price range. The application supports pagination and integrates with a shopping cart context for adding and managing properties. [Click here to check Live Site](https://totality-challenge.vercel.app/)

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Context API**: For managing global state (cart).

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd your-repo-name
   ```

3. **Install Dependencies**

   Ensure you have `npm` or `yarn` installed. Run the following command to install the required dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the Development Server**

   To run the application in development mode:

   ```bash
   npm start
   # or
   yarn start
   ```

   This will start the development server and open the application in your default browser.

5. **Build for Production**

   To create a production build of the application:

   ```bash
   npm run build
   # or
   yarn build
   ```

   The build files will be available in the `build` directory.

## Deployment Link

You can view the live application at [Deployment Link](https://totality-challenge.vercel.app/).

## Additional Notes

- **Filters and Pagination**: The application includes functionality for filtering properties and pagination. Filters are debounced to improve performance.
- **Styling**: The application uses Tailwind CSS for styling, which allows for rapid and responsive design.
- **Context API**: The CartContext is used to manage cart state across the application.

For any issues or feature requests, please open an issue on the [GitHub repository](https://github.com/ankit2four/totalityChallenge/).
