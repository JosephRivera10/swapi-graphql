import React from "react";
import styles from "./Films.module.css";

interface FilmObject {
  id: string;
  title: string;
  openingCrawl: string;
}

interface Props {
  films: FilmObject[];
  onSelect: (id: string) => void;
  selectedFilm: FilmObject | null;
}

const Films = ({ films, onSelect, selectedFilm }: Props) => {
  if (!films) return null;
  return (
    <>
      {films.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            onSelect(item.id);
          }}
          className={`${styles.filmCard} ${
            selectedFilm?.id === item.id ? styles.selectedShadow : ""
          }`}
        >
          {item.title}
        </div>
      ))}
    </>
  );
};

export default Films;
{
  /* <div className={`btn-group pull-right ${this.props.showBulkActions ? 'shown' : 'hidden'}`}> */
}
