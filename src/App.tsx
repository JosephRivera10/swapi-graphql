import { useState } from "react";
import "./App.css";
import { GET_FILMS } from "./graphql/queries";
import { useQuery } from "@apollo/client";
import Films from "./Films";
import OpeningCrawl from "./Films/openingCrawl";

function App() {
  // call api
  const { loading, error, data } = useQuery(GET_FILMS);
  const [selectedFilm, setSelectedFilm] = useState(null);

  console.log("data", data);
  const handleSelectedFilm = (id: string) => {
    const result = data.allFilms.films.filter((item: any) => item.id === id);
    console.log("result", result);
    setSelectedFilm(result[0]);
  };

  return (
    <main>
      <h1>Star War Films</h1>
      <div className="filmsContainer">
        {loading && <div>Loading...</div>}
        {error && <div>Can't get the movies.</div>}
        <Films
          films={data?.allFilms?.films}
          onSelect={handleSelectedFilm}
          selectedFilm={selectedFilm}
        />
      </div>
      <div className="crawlContainer">
        {selectedFilm && <OpeningCrawl selectedFilm={selectedFilm} />}
      </div>
    </main>
  );
}

export default App;
