import { useEffect, useState } from "react";
import styled from "styled-components";
import CardsResult from "./components/CardsResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [Filtered, setFiltered] = useState(null);
  const [selectedButton, SetSelectedButton] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFiltered(json);
        setLoading(fasle);
      } catch (error) {
        setError("Unable to fetch Data");
      }
    };
    fetchFoodData();
  }, []);

  const SearchFoods = (e) => {
    const SearchValue = e.target.value;
    if (SearchValue === "") {
      setFiltered(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(SearchValue.toLowerCase())
    );
    setFiltered(filter);
  };

  const FilterFood = (type) => {
    if (type == "all") {
      setFiltered(data);
      SetSelectedButton("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFiltered(filter);
    SetSelectedButton(type);
  };
  const FilterBtn = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "dinner",
      type: "dinner",
    },
  ];

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="images/log.svg" alt="logo" />
          </div>
          <div className="search">
            <input
              onChange={SearchFoods}
              type="text"
              placeholder="search Food"
            />
          </div>
        </TopContainer>

        <FilterContainer>
          {FilterBtn.map((value) => (
            <Button key={value.name} onClick={() => FilterFood(value.type)}>
              {value.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>
      <CardsResult data={Filtered} />
    </>
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
  .logo {
    filter: blur(1px);
    &:hover {
      filter: blur(0px);
      cursor: pointer;
    }
  }
  @media (0< width < 600px) {
    flex-direction: column;
  }
`;
const FilterContainer = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  background-color: yellow;
  border: none;
  padding: 10px;
  width: 90px;
  margin: 10px;
  box-shadow: 2px 2px 4px #e9d0d0;
  box-shadow: 2px 4px 4px #111010;
  text-align: center;
  font-weight: bold;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  transition: 0.3s ease-in;
  &:hover {
    color: white;
    background-color: #323343;
    box-shadow: 2px 2px 4px #e9d0d0;
    box-shadow: 2px 4px 4px #111010;
    transition: 0.3s ease-in;
  }
`;
