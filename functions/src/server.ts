import express from "express";
import cors from "cors";
import {TasksRoutes} from "./presentation/tasks/tasks.routes";
import {UsersRoutes} from "./presentation/users/users.routes";


export class Server {
    public readonly app = express();

    public async start() {
        //* Middlewares Setup
        //* Setting up middleware functions to parse(Analyze or Interpret) incoming Request Bodies
        this.app.use(express.json()); // raw
        this.app.use(express.urlencoded({extended: true})); // x-www-form-urlencoded

        this.app.use(cors());

        //* Routes Setup
        //? This line sets up the routes defined in 'this.routes'
        //? It tells Express App to use these routes for handling incoming requests.
        this.app.use('/tasks', TasksRoutes.routes);
        this.app.use('/users', UsersRoutes.routes);
    }
}