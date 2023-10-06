import { Stage } from "../Models/stagesModel.js";

// add new Stage
export const addStages = async (req, res) => {
    try {
        const user = req.body;
        const newUser = new Stage(user);
        await newUser.save();
        res.status(200).json({ data: user });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//  updated Stage
export const updateStage = async (req, res) => {
    try {
        const Id = req.params.id;
        const updatedStage = req.body;


        const existingStage = await Stage.findByPk(Id);

        if (!existingStage) {
            return res.status(404).json({ message: 'Stage not found' });
        }

        // Update the existing Stage with the new data
        existingStage.set(updatedStage);
        await existingStage.save();

        res.status(200).json({ data: existingStage });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Delete a Stage by ID
export const deleteStage = async (req, res) => {
    try {
        const Id = req.params.id;

        // Check if the Stage exists
        const Stage = await Stage.findByPk(Id);

        if (!Stage) {
            return res.status(404).json({ message: 'Stage not found' });
        }

        // Delete the Stage
        await Stage.destroy({
            where: {
                id: Id,
            },
        });

        res.status(200).json({ message: 'Stage deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getStage = async (req, res) => {
    try {
        const StageId = req.params.id; // Assuming 'id' is the path parameter name
        const Stage = await Stage.findByPk(StageId);

        if (!Stage) {
            return res.status(404).json({ message: 'Stage not found' });
        }

        res.status(200).json({ data: Stage });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getStageSubStages = async (req, res) => {
    try {
        const stageId = req.params.id; // Get the stage ID from the path parameter

        // Assuming you have a relationship between Stage and SubStage models
        const stage = await Stage.findById(stageId).populate('subStages');

        if (!stage) {
            return res.status(404).json({ message: 'Stage not found' });
        }

        const subStages = stage.subStages;

        // Assuming StageDTO is a transformation of the Stage model to DTO
        const subStageDTOs = subStages.map(subStage => new StageDTO(subStage));

        res.status(200).json(subStageDTOs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


