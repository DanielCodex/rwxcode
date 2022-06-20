import type { NextApiRequest, NextApiResponse } from "next";

const API =
  "https://api.github.com/search/repositories?q=+in:readme+language:javascript+good-first-issues:%3E0+stars:0..50&sort=stars&order=desc&per_page=100";

export default async function hander(req: NextApiRequest, res: NextApiResponse) {
  const { query: id } = req;
  if (req.method === "GET") {
    console.log(id.id);
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id.id}`);
    const response = await data.json();
    res.status(200).json(response);
  }
}
