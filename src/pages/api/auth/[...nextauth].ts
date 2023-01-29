import { User } from "@/models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60

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
        const user = await User.findOne({ email }).exec();
        const userDoc = user._doc
        delete userDoc.password
        if (userDoc) {
          return userDoc;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({session, token}) {
      session.user = token.user;
      return session;
    },
    async jwt({token, user}) {
      if (user) token.user = user;
      return token;
    },
},
};

export default NextAuth(authOptions);
