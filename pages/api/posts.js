// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from '../../lib/client'

export default async function posts(req, res) {
    const { start, end } = req.query

    if (isNaN(Number(start)) || isNaN(Number(end))) {
      return res.sendStatus(400).json({
        error: 'Data invalid'
      })
    }

    const {posts, total} = await loadPosts(start, end)
    res.status(200).json({
      posts,
      total
    })
}

export async function loadPosts(start, end) {
    const query = `{
      "posts": *[_type == "post"] | order(releaseDate desc) {
        _id, title, releaseDate, slug, description, image} [${start}...${end}],
      "total": count(*[_type == "post"])
    }`
    const {posts, total} = await client.fetch(query)

    return {
      posts,
      total
    }
}