import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from 'next-auth/providers/github'


export const nextauth = {
 providers: [
  GoogleProvider({
   clientId: process.env.GOOGLE_ID as string,
   clientSecret:process.env.CLIENT_SECRET as string,
  }),
  GithubProvider({
    clientId: process.env.GITHUB_ID as string,
    clientSecret:process.env.GITHUB_SECRET as string,
   }),
 ],
};
export default NextAuth(nextauth);


