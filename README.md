<<<<<<< HEAD
# 🛍️ Advanced React E-Commerce Web App

This is a fully functional e-commerce application built with modern front-end technologies including **React**, **Vite**, **Redux Toolkit**, and **React Query**. It simulates a shopping experience using the [FakeStoreAPI](https://fakestoreapi.com/), providing dynamic product listings, category filtering, and a complete shopping cart experience with simulated checkout.

## 🚀 Live Demo

> _Coming Soon_ (or deploy to [Vercel](https://vercel.com) or [Netlify](https://netlify.com) and link here)

---

## 📦 Features

### 🛒 Product Catalog
- ✅ Fetches products from [FakeStoreAPI](https://fakestoreapi.com/)
- ✅ Displays product image, title, price, rating, category, and description
- ✅ Dropdown menu to filter products by category (dynamically fetched)
- ✅ Real-time updates on product filtering via React Query

### 📁 Category Filter
- Uses `/products/categories` endpoint to dynamically populate category dropdown
- Selecting a category filters the product list in real-time

### 🛍️ Shopping Cart
- Built with **Redux Toolkit**
- Add/remove items directly from product list and cart
- Stores cart data in both Redux state and browser **sessionStorage**
- Displays:
  - Product title and image
  - Quantity
  - Price and total
- Simulated checkout clears cart and sessionStorage

### 💾 Persistent State
- Uses `sessionStorage` to persist cart state between reloads

---

## 🛠️ Tech Stack

- ⚡ [Vite](https://vitejs.dev/) for fast build tooling
- ⚛️ React + TypeScript
- 📦 Redux Toolkit for state management
- 🔄 React Query for async data fetching
- 🎨 Tailwind CSS (or replace with your preferred styling)

---

## 📂 Project Structure

=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 869250c7df6c19fba5d1c4e76de7d78b6cbc48cc
