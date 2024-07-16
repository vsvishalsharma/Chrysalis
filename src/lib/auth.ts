import { getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prismaDB } from "@/providers/connection";

export const authOptions: any = {
  adapter: PrismaAdapter(prismaDB),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      authorization: {
        params: {
          scope: 'read:user user:email repo issues'
        }
      }
    }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions);