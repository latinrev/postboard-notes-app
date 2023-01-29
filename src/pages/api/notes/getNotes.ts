// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from '@/util/mongodb'
import { getNotes } from '@/util/mongoFunctions'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let session = await getSession({req})
  await connectToDatabase()
  let notes = await getNotes(session?.user._id)
  res.status(200).json(notes)
}