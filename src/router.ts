import { Request, Response, Router } from 'express' 
import { Users } from './controller/users/userController';

const router = Router()

const UsersController = new Users()

router.post('/users', (request: Request, response: Response) => {
  UsersController.create(request, response)
})

router.get("/", (req: Request, res: Response) => {
    res.status(200).json({ Hello: "Processing API." });
  });

export { router }