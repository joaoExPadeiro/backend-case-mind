import express, { json, urlencoded } from "express";
import { router } from "./router";

export class App {
  private server: express.Application;

  constructor() {
    this.server = express();
    this.server.use(json());
    this.server.use(urlencoded({ extended: true }));
    this.server.use(router);
  }

  public getServer(): express.Application {
    return this.server;
  }
}
