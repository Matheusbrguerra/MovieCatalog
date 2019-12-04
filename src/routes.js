import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ActorController from "./app/controllers/ActorController";
import DirectorController from "./app/controllers/DirectorController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
/*
Rotas de Cadastro e Login dde Usuário
*/
routes.post("/user", UserController.store);
routes.post("/session", SessionController.store);

routes.use(authMiddleware);

routes.post("/actors", ActorController.store);
routes.post("/directors", DirectorController.store);

export default routes;
