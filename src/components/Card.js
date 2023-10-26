import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import "./Card.css";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const starCount = Math.round(star);
  const starIcons = Array.from({ length: starCount }, (_, index) => (
    <AiFillStar key={index} color="gold" />
  ));

  return (
    <>
      <section className="card" style={{ width: "350px", height: "382px" }}>
        <label>
          <img
            src={img}
            alt={title}
            className="card-img"
            style={{ width: "200px", height: "200px" }}
          />
          <span onClick={toggleFavorite} className="favorite-button" style={{}}>
            {isFavorited ? <FaHeart color="red" /> : <FaRegHeart />}
          </span>
        </label>
        <button className="view-product-button">View Product</button>

        <div className="card-details">
          <h3 className="card-title">{title}</h3>

          <section className="card-price">
            <div className="price">
              <del style={{ color: "grey", fontWeight: "bold" }}>
                Rs{Math.round(prevPrice)}
              </del>{" "}
              <span style={{ color: "royalblue", fontWeight: "bold" }}>
                Rs{Math.round(newPrice)}
              </span>
            </div>
          </section>
          <section className="card-reviews">
            {starIcons}
            <span className="total-reviews">({reviews})</span>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
