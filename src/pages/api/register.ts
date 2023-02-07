// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@/models/user";
import { UserProps } from "@/interfaces/userProps";
import { connectToDatabase } from "@/util/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
var jwt = require("jsonwebtoken");
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  connectToDatabase();
  const newUser: UserProps = JSON.parse(req.body);
  const user = new User({ email: newUser.email });
  user.password = user.generateHash(newUser.password);
  await user.save();
  res.status(200);
}
