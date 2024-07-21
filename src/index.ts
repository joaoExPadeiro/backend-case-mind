import { App } from "./app";


new App().getServer().listen(3000, () => {
    console.log('servidor rodando na porta 3000')
})