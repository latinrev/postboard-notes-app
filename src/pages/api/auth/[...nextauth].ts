import { User } from "@/models/user";
import { connectToDatabase } from "@/util/mongodb";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
export const authOptions = {
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        await connectToDatabase();
        const user = await User.findOne({ email });
        if (!user) return null;
        const userDoc = user._doc;
        let isMatched = await bcrypt.compare(password, userDoc.password);
        delete userDoc.password;
        if (userDoc && isMatched) {
          return userDoc;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signin: "/signin",
  },
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
  },
};

export default NextAuth(authOptions);
