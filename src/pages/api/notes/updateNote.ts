// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from "@/util/mongodb";
import { getNotes, updateNote } from "@/util/mongoFunctions";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id, updatedNote } = req.body;
  await connectToDatabase();
  let noteDoc = await updateNote(id, updatedNote);
  res.status(200).json(noteDoc);
}
