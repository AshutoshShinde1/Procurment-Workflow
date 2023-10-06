import { Substage } from "../Models/subStageModel.js";

// add new Stage
export const addSubStages = async (req, res) => {
    try {
        const user = req.body;
        const newUser = new Substage(user);
        await newUser.save();
        res.status(200).json({ data: user });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//  updated Stage
export const updateSubStage = async (req, res) => {
    try {
        const Id = req.params.id;
        const updateSubStage = req.body;


        const existingSubStage = await Substage.findByPk(Id);

        if (!existingSubStage) {
            return res.status(404).json({ message: 'Stage not found' });
        }

        // Update the existing Stage with the new data
        existingSubStage.set(updateSubStage);
        await existingSubStage.save();

        res.status(200).json({ data: existingSubStage });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Delete a Stage by ID
export const deleteSubstage = async (req, res) => {
    try {
        const Id = req.params.id;

        // Check if the Stage exists
        const Substage = await Substage.findByPk(Id);

        if (!Substage) {
            return res.status(404).json({ message: 'Stage not found' });
        }

        // Delete the Stage
        await Substage.destroy({
            where: {
                id: Id,
            },
        });

        res.status(200).json({ message: 'Stage deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getSubStage = async (req, res) => {
    try {
        const Id = req.params.id; // Assuming 'id' is the path parameter name
        const SubStage = await Substage.findByPk(Id);

        if (!SubStage) {
            return res.status(404).json({ message: 'Stage not found' });
        }

        res.status(200).json({ data: Stage });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getSubStagesTasks = async (req, res) => {
    try {
        const Id = req.params.id; // Get the stage ID from the path parameter

        // Assuming you have a relationship between Stage and SubStage models
        const subStage = await Substage.findById(Id).populate('subStages');

        if (!subStage) {
            return res.status(404).json({ message: 'Stage not found' });
        }

        const Tasks = Substage.Tasks;

        // Assuming StageDTO is a transformation of the Stage model to DTO
        const TaskDTOs = Tasks.map(Tasks => new StageDTO(Tasks));

        res.status(200).json(TaskDTOs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


