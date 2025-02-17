import {UsersService} from "../../domain/services/users.service";
import {Request, Response} from "express";
import {handleError} from "../../domain/helpers/errors/handle-error";

export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    public getByEmail = (req: Request, res: Response) => {
        const {email} = req.params;
        this.usersService.getByEmail(email)
            .then(result => res.status(200).json(result))
            .catch(error => handleError(error, res));
    }

    public createUser = (req: Request, res: Response) => {
        const {email} = req.body;
        const userDto = {email};
        this.usersService.createUser(userDto)
            .then(result => res.status(200).json(result))
            .catch(error => handleError(error, res));
    }
}