import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ActorController from "./app/controllers/ActorController";
import DirectorController from "./app/controllers/DirectorController";
import MovieController from "./app/controllers/MovieController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

// Rotas de Cadastro e Login de Usuário
routes.post("/user", UserController.store);
routes.post("/session", SessionController.store);

routes.use(authMiddleware);

// Rotas de CRUD de Atores
routes.get("/actors/:id", ActorController.single);
routes.get("/actors", ActorController.index);
routes.post("/actors", ActorController.store);
routes.delete("/actors/:id", ActorController.delete);
routes.put("/actors/:id", ActorController.update);

// Rotas de CRUD de Diretores
routes.get("/directors/:id", DirectorController.single);
routes.get("/directors", DirectorController.index);
routes.post("/directors", DirectorController.store);
routes.delete("/directors/:id", DirectorController.delete);
routes.put("/directors/:id", DirectorController.update);

//Rotas de CRUD de Filmes
routes.post("/movies", MovieController.store);
routes.get("/movies", MovieController.index);
routes.get("/movies/:id", MovieController.single);
routes.put("/movies/:id", MovieController.update);
routes.delete("/movies/:id", MovieController.delete);

export default routes;
