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
}

export interface MovieData {
  page: number;
  results: IMovie[];
  total_page: number | any;
  total_result: number | any;
}
