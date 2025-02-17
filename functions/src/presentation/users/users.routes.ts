import {Router} from "express";
import {UsersService} from "../../domain/services/users.service";
import {UsersController} from "./users.controller";

export class UsersRoutes {
    public static get routes(): Router {
        const router = Router();
        const service = new UsersService();
        const controller = new UsersController(service);

        router.get("/:email", controller.getByEmail);
        router.post("/", controller.createUser);

        return router;
    }
}