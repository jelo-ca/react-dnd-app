import "./App.css";
import Header from "./Components/Header";
import DisplayResults from "./Components/DisplayResults";
import SearchInput from "./Components/SearchInput";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [resultCount, setResultCount] = useState(0);
  const [apiLink, setApiLink] = useState("/api/monsters");
  const [category, setCategory] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  //Fetches Data function to fetch data from dnd4 api
  //Sets data variable and resultCount with returned data
  function fetchData() {
    fetch(`https://www.dnd5eapi.co${apiLink}`)
      .then((resposne) => resposne.json())
      .then((jsonData) => {
        setData(jsonData.results);
        setResultCount(jsonData.count);
      })
      .catch((error) => console.log(error));
  }

  //fetchData() call
  useEffect(() => fetchData(), []);

  //General handleChange for SearchInput
  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  //General handleSubmit for SearchInput
  function handleSubmit(e) {
    e.preventDefault();
    setSearch(searchInput);
    setSearchInput("");
  }

  function changeCategory(category) {
    setCategory(category);
    setApiLink(`/api/${category}`);
    console.log("hello");
  }

  return (
    <div className="App">
      <Header changeCategory={changeCategory} />
      <SearchInput
        searchInput={searchInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <DisplayResults data={data} resultCount={resultCount} />
    </div>
  );
}

export default App;
