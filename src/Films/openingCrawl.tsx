import React from "react";

interface FilmObject {
  id: string;
  title: string;
  openingCrawl: string;
}

interface Props {
  selectedFilm: FilmObject;
}

const OpeningCrawl = ({ selectedFilm }: Props) => {
  return <div>{selectedFilm.openingCrawl}</div>;
};

export default OpeningCrawl;
