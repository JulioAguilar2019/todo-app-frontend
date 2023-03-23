export interface Task {
    task_id: number,
    name: string,
    description: string,
    start_date: Date,
    end_date: Date,
    status: TaskStatus,
    task_categery_id: number,
    user_profile_id: number,
    end_time: Date,
    start_time: Date
}

enum TaskStatus {
    "Pending",
    "In Progress",
    "Completed"
}