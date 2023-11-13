import Auth from "../../../libs/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},

      authorize: async (credentials) => {
        const { email, password } = credentials as Record<
          "email" | "password",
          string
        >;
        const user = await Auth.signin({ email, password });
        if (user) {
          return {
            id: user.id,
            signedJwt: user.signedJwt,
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      session.user = token.user!;

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
});
