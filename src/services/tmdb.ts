export default async function tmdbHandler(req: string, opts?: RequestInit) {
  const [url, query] = req.split('?')
  const params = new URLSearchParams(query)
  params.append('api_key', process.env.API_KEY ?? '')
  params.append('language', 'en-US')
  return fetch(
    `${process.env.BASE_URL}/${url?.replace(
      '/api/tmdb',
      ''
    )}?${params.toString()}`,
    opts
  )
}
