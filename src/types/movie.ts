export interface IMovie {
  id: number;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  title: string;
  vote_count: number;
  vote_average: 7.2;
  original_language: string;
  genre_ids: number[];
  adult: boolean;
  release_date: string;
  video: boolean;
  tagline: string | null;
  runtime: number | null;
  genres: {
    id: number;
    name: string;
  }[];
}

export interface MovieData {
  page: number;
  results: IMovie[];
  total_pages: number | any;
  total_results: number | any;
}
