import {db} from "../../config/firebase";
import {CreateTaskDto} from "../dtos/create-task.dto";
import {TaskDto} from "../dtos/task.dto";
import {UpdateTaskDto} from "../dtos/update-task.dto";

export class TasksService {
    public async getTodos() {
        const querySnapshot = await db.collection("tasks").get();
        const result: TaskDto[] = [];
        querySnapshot.forEach(doc => {
            const data = doc.data();
            result.push({
                id: doc.id,
                title: data.title,
                description: data.description,
                createdAt: data.createdAt,
                completed: data.completed,
            });
        });

        return result;
    }

    public async createTodo(createTaskDto: CreateTaskDto) {
        createTaskDto.createdAt = new Date().toISOString();
        const docRef = db.collection("tasks").doc();
        await docRef.set(createTaskDto);

        const newTaskCreated: TaskDto = {
            id: docRef.id,
            title: createTaskDto.title,
            description: createTaskDto.description,
            createdAt: createTaskDto.createdAt,
            completed: createTaskDto.completed,
        }
        return newTaskCreated;
    }

    public async updateTodo(updateTaskDto: UpdateTaskDto) {
        console.log(updateTaskDto)
        const docRef = db.collection("tasks").doc(updateTaskDto.id);

        await docRef.set(updateTaskDto, {merge: true});
        return "Task updated successfully";
    }

    public async deleteTodo(id: string) {
        const docRef = db.collection("tasks").doc(id);
        await docRef.delete();
        return "Task deleted successfully";
    }
}