import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
export const { handlers, auth, SignIn, SignOut } = NextAuth({ providers: [
     GitHub(
    { clientId: process.env.GIT_ID , clientSecret: process.env.GIT_SECRET }
) ] })