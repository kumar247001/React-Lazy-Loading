import React from "react";
import styled from "styled-components";

const PromoCardWrapper = styled.div`
  .promo {
    display: flex;
    width: 100%;
    margin: 10px 0 20px 0;
    background-color: white;
    flex-direction: column;
    border: 1px solid #ddd;
    min-height: 300px;
  }

  .post-wrapper.col-2 .promo .lazyload-wrapper {
    width: 100%;
  }
  .post-wrapper.col-3 .promo .lazyload-wrapper {
    width: 100%;
  }

  .promo.loading {
    justify-content: center;
  }

  .promo-img {
    flex: 1;
    width: 100%;
  }
  .promo img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .promo-body {
    display: flex;
    padding: 20px;
    border: 0;
    border-top: 0;
    flex-direction: column;
    font-size: 18px;
    color: black;
    text-align: center;
  }

  .promo__family-heading {
    font-size: 24px;
    color: black;
    margin: 0;
  }
  .promo__discount-price {
    color: rgb(221, 16, 50);
  }
  .promo__actual-price {
    text-decoration: line-through;
  }
  .promo__cart-button {
    max-width: 200px;
    margin: 20px auto 0 auto;
  }

  .promo__cart-button a {
    font-family: "Rooneysans-Medium", "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    background: #0099ff;
    color: white;
    font-size: 18px;
    text-decoration: none;
    padding: 10px 35px;
    color: white;
    border-radius: 8px;
    text-transform: capitalize;
    cursor: pointer;
    display: block;
  }
`;

const Promocard = ({
  id,
  family_heading,
  foundary_name,
  total_price,
  discounted_price,
  button_text
}) => (
  <PromoCardWrapper>
    <div className="promo">
      <div className="promo-img">
        <img src={`https://picsum.photos/id/${id}/600/300`} alt="..." />
      </div>
      <div className="promo-body">
        <div>
          <h2 className="promo__family-heading">{family_heading} </h2>
          <div className="promo__family-type">
            <span># Styles</span>
            <span> by {foundary_name}</span>
          </div>
          <div className="promo__prices">
            <span className="promo__actual-price">{total_price}</span>
            <span className="promo__discount-price">{discounted_price}</span>
          </div>
        </div>
        <div className="promo__cart-button">
          <a href="{{ content.font_link }}" target="_blank">
            {button_text}
          </a>
        </div>
      </div>
    </div>
  </PromoCardWrapper>
);

export default Promocard;
