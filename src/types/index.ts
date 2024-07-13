export interface TrendingResponse {
  page: number;
  results: TrendingResult[];
  total_pages: number;
  total_results: number;
}

export interface TrendingResult {
  backdrop_path: Backdrop[];
  id: number;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  adult: boolean;
  title: string;
  original_language: OriginalLanguage;
  genres: Genre[];
  popularity: number;
  release_date?: Date;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  original_name?: string;
  name: string;
  first_air_date?: Date;
  origin_country?: string[];
}

export enum MediaType {
  Movie = "movie",
  Tv = "tv",
}

export enum OriginalLanguage {
  En = "en",
  Fr = "fr",
  Ja = "ja",
  Zh = "zh",
}

export interface MovieResponse {
  page: number;
  results: MovieResult[];
  total_pages: number;
  total_results: number;
}

export interface MovieResult {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  adult: boolean;
  title: string;
  original_language: OriginalLanguage;
  genres: Genre[];
  popularity: number;
  release_date: Date;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Genre {
  id: number;
  name: string;
}
export interface TvResponse {
  page: number;
  results: TvResult[];
  total_pages: number;
  total_results: number;
}

export interface TvResult {
  backdrop_path: Backdrop[];
  id: number;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  adult: boolean;
  name: string;
  original_language: OriginalLanguage;
  genres: Genre[];
  popularity: number;
  first_air_date: Date;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

export interface MultiSearchResponse {
  page: number;
  results: PersonResult[] | TvResult[] | MovieResult[];
  total_pages: number;
  total_results: number;
}

export interface PersonResult {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: Date;
  deathday: null;
  gender: number;
  homepage: null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
  media_type: null | MediaType;
}

export interface PersonImagesResult {
  id: number;
  profiles: Profile[];
}

export interface Profile {
  aspect_ratio: number;
  height: number;
  iso_639_1: null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface PersonCreditsResult {
  cast: Cast[];

  id: number;
}
export interface Cast {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title?: string;
  overview: string;
  release_date?: string;
  title?: string;
  characters: string;
  media_type: MediaType;
  names?: string;
  poster_path: string;
}

export interface Backdrop {
  aspect_ratio: number;
  height: number;
  iso_639_1: null | string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}
export interface TrailerResponse {
  page: number;
  results: Trailer[];
  total_pages: number;
  total_results: number;
}

export interface Trailer {
  name: string;
  key: string;
  site: Site;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

export enum Site {
  YouTube = "YouTube",
}

export interface CastResult {
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  job?: string;
}
