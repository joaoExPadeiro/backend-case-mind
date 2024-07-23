import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class FinanceServices {
  async create(description: string, tipo: string, valor: number): Promise<any> {
    console.log(description, valor);

    try {
      const data: any = { description, tipo, valor };

      const res = await prisma.transaction.create({
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

  async update(id: number, description: string, tipo: string, valor: number): Promise<any> {
    console.log(description, valor);

    try {
      const data = { description, tipo, valor };

      const res = await prisma.transaction.update({
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
      const res = await prisma.transaction.findMany({
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
      const res = await prisma.transaction.delete({
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
