import { gql } from "@apollo/client";

export const GET_FILMS = gql`
  query GetFilms {
    allFilms {
      films {
        id
        title
        openingCrawl
      }
    }
  }
`;
