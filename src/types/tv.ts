export interface PopularTVSType {
  page: number
  results?: PopularTVSResult[] | null
  total_results: number
  total_pages: number
}
export interface PopularTVSResult {
  poster_path: string
  popularity: number
  id: number
  backdrop_path: string
  vote_average: number
  overview: string
  first_air_date: string
  origin_country?: string[] | null
  genre_ids?: number[] | null
  original_language: string
  vote_count: number
  name: string
  original_name: string
}

export interface TopTVSType {
  page: number
  results: TopTVSResult[]
  total_results: number
  total_pages: number
}

export interface TopTVSResult {
  poster_path: string
  popularity: number
  id: number
  backdrop_path: string
  vote_average: number
  overview: string
  first_air_date: string
  origin_country: string[]
  genre_ids: number[]
  original_language: string
  vote_count: number
  name: string
  original_name: string
}

export interface OnAirTVSType {
  page: number
  results: OnAirTVSResult[]
  total_results: number
  total_pages: number
}

export interface OnAirTVSResult {
  poster_path: string
  popularity: number
  id: number
  backdrop_path?: string
  vote_average: number
  overview: string
  first_air_date: string
  origin_country: string[]
  genre_ids: number[]
  original_language: string
  vote_count: number
  name: string
  original_name: string
}
