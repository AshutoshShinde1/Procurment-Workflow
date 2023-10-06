import { Task } from "../Models/TaskModel.js";

// GET all tasks
export const getTaskList = async (req, res) => {
    try {
        const Task = await Task.findAll({})
        res.status(200).json(Task);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// POST a new task
export const addTask = async (req, res) => {
    try {
        const user = req.body;
        const newUser = new Task(user);
        await newUser.save();
        res.status(200).json({ data: user });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET a task by ID
export const getTask = async (req, res) => {
    const taskId = req.params.id;
    const task = await Task.find((t) => t.TaskID === parseInt(taskId));
    if (task) {
        res.status(200).json(task, 'Task get request succefully');
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
};

// PUT (update) a task by ID
export const updateTask = async (req, res) => {
    try {
        const TaskId = req.params.id;
        const updatedTaskData = req.body;

        // Check if the Task with the given ID exists
        const existingTask = await Task.findByPk(TaskId);

        if (!existingTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Update the existing Task with the new data
        existingTask.set(updatedTaskData);
        await existingTask.save();

        res.status(200).json({ data: existingTask });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE a task by ID
export const deleteTask = async (req, res) => {
    try {
        const TaskId = req.params.id;

        // Check if the project exists
        const task = await Task.findByPk(TaskId);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Delete the project
        await task.destroy({
            where: {
                id: TaskId,
            },
        });

        res.status(200).json({ message: 'Task deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
