import { PrismaClient } from "@prisma/client"

const gloablForPrisma = global as unknown as{
    prisma: PrismaClient | undefined
}

export const prisma = 
gloablForPrisma.prisma ??
new PrismaClient({
    log : ['query']
})

if(process.env.NODE_ENV !== 'production') gloablForPrisma.prisma = prisma;