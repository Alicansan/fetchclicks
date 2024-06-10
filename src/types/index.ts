export interface TrendingResponse {
    page:          number;
    results:       TrendingResult[];
    total_pages:   number;
    total_results: number;
}

export interface TrendingResult {
    backdrop_path:     string;
    id:                number;
    original_title?:   string;
    overview:          string;
    poster_path:       string;
    media_type:        MediaType;
    adult:             boolean;
    title?:            string;
    original_language: OriginalLanguage;
    genre_ids:         number[];
    popularity:        number;
    release_date?:     Date;
    video?:            boolean;
    vote_average:      number;
    vote_count:        number;
    original_name?:    string;
    name?:             string;
    first_air_date?:   Date;
    origin_country?:   string[];
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
    page:          number;
    results:       MovieResult[];
    total_pages:   number;
    total_results: number;
}

export interface MovieResult {
    backdrop_path:     string;
    id:                number;
    original_title:    string;
    overview:          string;
    poster_path:       string;
    media_type:        MediaType;
    adult:             boolean;
    title:             string;
    original_language: OriginalLanguage;
    genre_ids:         number[];
    popularity:        number;
    release_date:      Date;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export interface TvResponse {
    page:          number;
    results:       TvResult[];
    total_pages:   number;
    total_results: number;
}

export interface TvResult {
    backdrop_path:     string;
    id:                number;
    original_name:     string;
    overview:          string;
    poster_path:       string;
    media_type:        MediaType;
    adult:             boolean;
    name:              string;
    original_language: OriginalLanguage;
    genre_ids:         number[];
    popularity:        number;
    first_air_date:    Date;
    vote_average:      number;
    vote_count:        number;
    origin_country:    string[];
}

