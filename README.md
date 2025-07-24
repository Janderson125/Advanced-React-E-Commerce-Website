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

