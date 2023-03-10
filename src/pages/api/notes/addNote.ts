// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { INote } from '@/interfaces/noteInterface'
import { connectToDatabase } from '@/util/mongodb'
import { addNote } from '@/util/mongoFunctions'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await getSession({req})
  const newNote:INote = req.body
  await connectToDatabase()
  let noteDoc = await addNote(session?.user?._id,newNote)
  res.status(200).json(noteDoc)
}