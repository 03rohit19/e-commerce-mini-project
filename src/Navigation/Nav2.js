import { useEffect, useState } from "react";
import "./Nav.css";

const Nav2 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        getSearchSuggestion();
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Filter products based on the search query
    const query = searchQuery.toLowerCase();
    const filtered = products.filter((product) =>
      product.category.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Enter category name..."
        />
      </div>
      {searchQuery && filteredProducts.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "40px", // Adjust this to position the box below the input
            left: "0",
            width: "200px", // Set the width as per your design
            background: "white",
            border: "1px solid #ccc",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav2;
