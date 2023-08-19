import { useState } from "react";
import styled from "styled-components";

const BASE_URL = "http://localhost:9000/";

const App = () => {
  const [data, setData] = useState(null);
  const fetchFoodData = async () => {
    const response = await fetch(BASE_URL);
    const json = await response.json();
    console.log(json);
  };
  fetchFoodData();

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="images/log.svg" alt="logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="search Food" />
        </div>
      </TopContainer>

      <FilterContainer>
        <Button>All</Button>
        <Button>BreakFast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>

      <FoodContainer>
        <FoodCards></FoodCards>
      </FoodContainer>
    </Container>
  );
};

export default App;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  .search input {
    padding: 10px;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid yellow;
    color: white;
  }
`;
const FilterContainer = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  background-color: yellow;
  border: none;
  padding: 10px;
  width: 70px;
  margin: 10px;
  text-align: center;
  border-radius: 5px;
  color: black;
  cursor: pointer;
`;
const FoodContainer = styled.section`
  background-image: url("/images/bg.png");
  height: calc(100vh - 220px);
  background-size: cover;
`;
const FoodCards = styled.div``;
