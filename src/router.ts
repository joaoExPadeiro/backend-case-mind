import { Request, Response, Router } from "express";
import { Users } from "./controller/users/userController";
import { Finance } from "./controller/finance/financeController";

const router = Router();

const UsersController = new Users();
const FinanceController = new Finance();

router.post("/users", (request: Request, response: Response) => {
  UsersController.create(request, response);
});

router.post("/users/login", (request: Request, response: Response) => {
  UsersController.login(request, response);
});

router.put("/users", (request: Request, response: Response) => {
  UsersController.update(request, response);
});

router.get("/users", (request: Request, response: Response) => {
  UsersController.find(response);
});

router.delete("/users/:id", (request: Request, response: Response) => {
  UsersController.delete(request, response);
});

router.post("/finance", (request: Request, response: Response) => {
  FinanceController.create(request, response);
});

router.put("/finance", (request: Request, response: Response) => {
  FinanceController.update(request, response);
});

router.get("/finance", (request: Request, response: Response) => {
  FinanceController.find(response);
});

router.delete("/finance/:id", (request: Request, response: Response) => {
  FinanceController.delete(request, response);
});

export { router };
