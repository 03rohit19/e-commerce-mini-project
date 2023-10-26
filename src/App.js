import React, { useState, useEffect } from "react";
// import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";
import Nav2 from "./Navigation/Nav2";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState("");
  const [rating, setSelectedRating] = useState("");
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    const value = event.target.value;

    if (event.target.name === "category") {
      setSelectedCategory(value);
    } else if (event.target.name === "priceRange") {
      setPriceRange(value);
    } else if (event.target.name === "rating") {
      setSelectedRating(value);
    }
  };

  function filteredData(products, selectedCategory, priceRange, query, rating) {
    let filteredProducts = products;

    // Filtering by search query
    if (query) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }

    // Filtering by selected category
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filtering by price range
    if (priceRange === "under100") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= 100
      );
    } else if (priceRange === "100to500") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price > 100 && product.price <= 500
      );
    } else if (priceRange === "above500") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price > 500 && product.price < 1100
      );
    }

    // filter by rating

    if (rating === "5 star") {
      filteredProducts = filteredProducts.filter(
        (product) =>
          Math.round(product.rating.rate) <= 5 &&
          Math.round(product.rating.rate) > 4
      );
    } else if (rating === "4 star") {
      filteredProducts = filteredProducts.filter(
        (product) =>
          Math.round(product.rating.rate) <= 4 &&
          Math.round(product.rating.rate) > 3
      );
    } else if (rating === "3 star") {
      filteredProducts = filteredProducts.filter(
        (product) =>
          Math.round(product.rating.rate) <= 3 &&
          Math.round(product.rating.rate) > 2
      );
    } else if (rating === "2 star") {
      filteredProducts = filteredProducts.filter(
        (product) =>
          Math.round(product.rating.rate) <= 2 &&
          Math.round(product.rating.rate) > 1
      );
    } else if (rating === "1 star") {
      filteredProducts = filteredProducts.filter(
        (product) =>
          Math.round(product.rating.rate) <= 1 &&
          Math.round(product.rating.rate) > 0
      );
    }

    return filteredProducts.map(({ id, image, title, rating, price }) => (
      <Card
        key={id}
        img={image}
        title={title}
        star={rating.rate}
        reviews={rating.count}
        prevPrice={price}
        newPrice={price}
      />
    ));
  }

  const result = filteredData(
    products,
    selectedCategory,
    priceRange,
    query,
    rating
  );

  return (
    <>
      <Sidebar handleChange={handleChange} />

      <Nav2 />

      <Products result={result} />
    </>
  );
}

export default App;
