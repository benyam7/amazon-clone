import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./Product.css";

const Product = ({ id, title, price, image, rating }) => {
  return (
    <div className="product" id={id}>
      <p>{title}</p>
      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>

      {/* id, title, price, rating, image */}

      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <StarIcon className="product__starIcon" />
          ))}
      </div>
    </div>
  );
};

export default Product;
