import { Request, response, Response } from "express";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();


export class Users {

    async create(request: Request, response: Response) {
        const { name, password } = request.body
        console.log(name, document)
        response.status(201).json({ })
    }
}