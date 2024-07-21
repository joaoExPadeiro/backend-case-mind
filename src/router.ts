import { Request, Response, Router } from 'express' 
// import { CustomerCreate } from './controller/CustomerCreate'
// import { CustomerRepositoryInMemory } from './infra/repository/memory/CustomerRepositoryInMemory'

const router = Router()

// const repository = new CustomerRepositoryInMemory()
// const customerCreate = new CustomerCreate(repository)

router.post('/customer', (request: Request, response: Response) => {
    // customerCreate.execute(request, response)
})

router.get("/", (req: Request, res: Response) => {
    res.status(200).json({ Hello: "Processing API." });
  });

export { router }