import {Router} from "express";
import {TasksController} from "./tasks.controller";
import {TasksService} from "../../domain/services/tasks.service";

export class TasksRoutes {
    public static get routes(): Router {
        const router = Router();
        const service = new TasksService();
        const controller = new TasksController(service);

        router.get("/", controller.getTodos);
        router.post("/", controller.createTodo);
        router.put("/", controller.updateTodo);
        router.delete("/:taskId", controller.deleteTodo);

        return router;
    }
}