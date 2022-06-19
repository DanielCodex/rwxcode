import type { NextApiRequest, NextApiResponse } from "next";

export default async function hander(req: NextApiRequest, res: NextApiResponse) {
  const { query: id } = req;
  if (req.method === "GET") {
    console.log(id.id);
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id.id}`);
    const response = await data.json();
    res.status(200).json(response);
  }
}
