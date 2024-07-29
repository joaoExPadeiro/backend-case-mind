import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export class UsersServices {
  async create(
    username: string,
    password: string,
    email: string
  ): Promise<any> {
    console.log(username, password);

    try {
      const passwordHash = await bcrypt.hash(password, 10);
      const data: any = { username, password: passwordHash, email };

      const res = await prisma.user.create({
        data,
      });

      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return null
      }
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return null
      }
      return user
      console.log(user)
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, username: string, password: string): Promise<any> {
    console.log(username, password);

    try {
      const data = { username, password };

      const res = await prisma.user.update({
        where: {
          id,
        },
        data,
      });

      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  }
  async find(): Promise<any> {
    try {
      const res = await prisma.user.findMany({
        where: {
          id: {
            gte: 1,
          },
        },
      });

      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  }
  async delete(id: number): Promise<any> {
    try {
      const res = await prisma.user.delete({
        where: {
          id,
        },
      });

      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  }
}
