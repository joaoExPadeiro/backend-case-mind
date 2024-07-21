import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class UsersServices {
    async create(username: String, password: String): Promise<any> {
        console.log(username, password)

    try {
        const data: any = { username, password}
        
        const res = await prisma.users.create({
          data,
        });
        
        console.log(res);
      } catch (err) {
        console.log(err);
      } finally {
        async () => {
          await prisma.$disconnect();
        };
      }
    }
}