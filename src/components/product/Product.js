import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./Product.css";
import { useStateValue } from "../../context/StateProvider";

const Product = ({ id, title, price, image, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product" id={id}>
      <div className="product__info">
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
              <p className="product__starIcon">
                <StarIcon />
              </p>
            ))}
        </div>
      </div>

      <img src={image} alt="Mac Book pro" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
