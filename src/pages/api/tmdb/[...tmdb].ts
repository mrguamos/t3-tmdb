// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import tmdbHandler from '../../../services/tmdb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json(await (await tmdbHandler(req.url ?? '')).json())
}
