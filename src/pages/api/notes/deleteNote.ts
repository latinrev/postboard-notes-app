import { connectToDatabase } from "@/util/mongodb";
import { deleteNote, getNotes } from "@/util/mongoFunctions";
import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let {id} = req.body
  await connectToDatabase();
  deleteNote(id);
  res.status(200);
}
