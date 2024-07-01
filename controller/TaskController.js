import Task from "../model/TaskSchema.js";




export const CreateTask = async (req, res) => {
    const { task } = req.body;

    try {
        if (!task || typeof task !== 'string') {
            return res.status(400).json({
                status: "error",
                message: "Task name is required and must be a string",
            });
        }

        const newTask = await Task.create({ task });

        res.status(201).json({
            status: "success",
            message: "Task created successfully",
            task: newTask,
        });
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({
            status: "error",
            message: "Task creation failed",
        });
    }
};


export const FetchTask = async(req,res)=>{
    const task = await Task.find()
    if(task){
        res.status(200).json({
            status:"success",
            message:"successfully fetched",
            data:task
        })
    }

}
export const UpdateTask = async (req, res) => {
    const { id } = req.params;
    const { task } = req.body;

    try {
        const newtask = await Task.findByIdAndUpdate(
            id,
            { $set: { task } },
            { new: true }
        );

        if (newtask) {
            res.status(200).json({
                status: "success",
                message: "successfully updated",
                data: newtask
            });
        } else {
            res.status(404).json({
                status: "error",
                message: "Task not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Task update failed",
            error: error.message
        });
    }
};

export const DeleteTask = async(req,res)=>{
    const {id} = req.params
    const deletetask = await Task.findByIdAndDelete(id)
    if(deletetask){
        res.status(200).json({
            status:"success",
            message:"successfully deleted",
            data:deletetask
        })
    }
}