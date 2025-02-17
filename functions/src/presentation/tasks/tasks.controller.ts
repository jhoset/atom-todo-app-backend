import {Request, Response} from "express";
import {handleError} from "../../domain/helpers/errors/handle-error";
import {TasksService} from "../../domain/services/tasks.service";
import {CreateTaskDto} from "../../domain/dtos/create-task.dto";
import {UpdateTaskDto} from "../../domain/dtos/update-task.dto";

export class TasksController {
    constructor(private readonly todosService: TasksService) {
    }

    public getTodos = (req: Request, res: Response) => {
        this.todosService.getTodos()
            .then(result => res.status(200).json(result))
            .catch(error => handleError(error, res));
    }

    public createTodo = (req: Request, res: Response) => {
        const {title, description, completed} = req.body;
        const createTaskDto: CreateTaskDto = {title, description, completed};
        this.todosService.createTodo(createTaskDto)
            .then(result => res.status(200).json(result))
            .catch(error => handleError(error, res));
    }

    public updateTodo = (req: Request, res: Response) => {
        const {id, title, description, completed} = req.body;
        const updateTaskDto: UpdateTaskDto = {id, title, description, completed};
        this.todosService.updateTodo(updateTaskDto)
            .then(result => res.status(200).json(result))
            .catch(error => handleError(error, res));
    }

    public deleteTodo = (req: Request, res: Response) => {
        const {taskId} = req.params;
        this.todosService.deleteTodo(taskId)
            .then(result => res.status(200).json(result))
            .catch(error => handleError(error, res));
    }
}