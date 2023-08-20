import React from "react";
import styled from "styled-components";
import { BASE_URL, Button } from "../App";
const CardsResult = ({ data }) => {
  return (
    <FoodContainer>
      <FoodCards>
        {data?.map(({ name, image, text, price }) => (
          <FoodC key={name}>
            <div className="ImgCont">
              <img src={BASE_URL + image} />
            </div>
            <div className="food_info">
              <div className="info">
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
              <Button>${price.toFixed(2)}</Button>
            </div>
          </FoodC>
        ))}
      </FoodCards>
    </FoodContainer>
  );
};

export default CardsResult;

const FoodContainer = styled.section`
  background-image: url("/images/bg.png");
  min-height: calc(100vh - 220px);
  background-size: cover;
`;
const FoodC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  border: 1px solid yellow;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 1px 2px 3px yellow;
  padding: 10px;
  margin-top: 30px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
const FoodCards = styled.div`
  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
