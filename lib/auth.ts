import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { prisma } from "@/prisma/db";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        console.log("authorize..........");
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.type === "oauth" && user.email) {
        const exist = await prisma.user.findUnique({
          where: {
            email: user?.email,
          },
        });

        if (!exist) {
          await prisma.user.create({
            data: {
              email: user?.email,
              name: user?.name,
              image: user.image,
            },
          });
        }
      }
      return true;
    },
    async session({ session, token, user }) {
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
