import "./App.css";
import React, { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list";
import SearchInput from "./components/search-input/search-input";
import {
  Container,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function App() {
  //state update does shallow merge which means it only updates the keys for which there is a value change
  const [obj, setObj] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const createHeadingTheme = createTheme({
    typography: {
      fontFamily: ["Rubik Glitch Pop", "system-ui"].join(","),
      fontWeightMedium: 400,
    },
  });

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setObj(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //This can be considered as componentDidMount state for the component because of [] empty dependency
  useEffect(() => {
    fetchData();
  }, []);

  const filterobj = obj.filter((ob) => {
    return ob["name"].toLocaleLowerCase().includes(inputValue);
  });

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLocaleLowerCase());
  };

  return (
    obj && (
      <Container>
        <div className="App">
          <ThemeProvider theme={createHeadingTheme}>
            <Typography
              variant="h2"
              component={"h2"}
              style={{
                fontFamily: "Rubik Glitch Pop, sans-serif",
                color: "white",
                marginBottom: "5%",
              }}>
              Monster Robolex
            </Typography>
          </ThemeProvider>
          <SearchInput handleChange={handleInputChange} />
          <div className="nameContainer">
            <CardList filteredList={filterobj} />
          </div>
        </div>
      </Container>
    )
  );
}

export default App;
