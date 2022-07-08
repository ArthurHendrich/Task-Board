import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"


export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read:user'
        }
      }
    }),
  ],

  callbacks: {
    async session({session, user}) {
      try{
        return {
          ...session,
          id: user.id
        }
      } catch {
        return {
          ...session,
          id: null
        }
      }
    },
    async signIn({user, account, profile}) {
      const {email} = user;

      try{
        return true;
      } catch(err) {
        console.log('Erro ao fazer login', err);
        return false
      }
    }
  },
  secret: process.env.NEXT_PUBLIC_SECRET,

})