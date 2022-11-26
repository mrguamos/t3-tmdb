export interface PopularMoviesType {
  page: number
  results?: PopularMoviesResult[] | null
  total_results: number
  total_pages: number
}
export interface PopularMoviesResult {
  poster_path: string
  adult: boolean
  overview: string
  release_date: string
  genre_ids?: number[] | null
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}
