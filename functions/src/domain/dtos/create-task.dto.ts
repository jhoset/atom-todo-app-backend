export interface CreateTaskDto {
    title: string;
    description: string;
    createdAt?: string;
    completed: boolean;
}