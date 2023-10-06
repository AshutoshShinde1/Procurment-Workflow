import { Projectteam } from "../Models/projectteamModel.js";

// Add a new use case
export const addProjectTeam = async (req, res) => {
    try {
        const ProjectteamData = req.body;
        const newProjectteam = new Projectteam(ProjectteamData);
        await newProjectteam.save();
        res.status(200).json({ data: newProjectteam });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a use case by ID
export const updateProjectTeam = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedProjectteamData = req.body;

        // Check if the use case with the given ID exists
        const existingProjectteam = await Projectteam.findByPk(id);

        if (!existingProjectteam) {
            return res.status(404).json({ message: 'Use case not found' });
        }

        // Update the existing use case with the new data
        existingProjectteam.set(updatedProjectteamData);
        await existingProjectteam.save();

        res.status(200).json({ data: existingProjectteam });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a use case by ID
export const deleteProjectTeam = async (req, res) => {
    try {
        const id = req.params.id;

        // Check if the use case exists
        const Projectteam = await Projectteam.findByPk(id);

        if (!Projectteam) {
            return res.status(404).json({ message: 'Use case not found' });
        }

        // Delete the use case
        await Projectteam.destroy({
            where: {
                id: id,
            },
        });

        res.status(200).json({ message: 'project team deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all use cases
export const getProjectTeamList = async (req, res) => {
    try {
        const Projectteam = await Projectteam.findAll({});
        res.status(200).json(Projectteam);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProjectTeam = async (req, res) => {
    try {
        const id = req.params.id;
        const getProjectTeam = req.body;

        // Check if the use case with the given ID exists
        const existingUsecase = await Projectteam.findByPk(id);

        if (!existingUsecase) {
            return res.status(404).json({ message: 'projectteam not found' });
        }

        // Update the existing use case with the new data
        existingProjectteam.set(getProjectTeam);
        await existingProjectteam.save();

        res.status(200).json({ data: existingProjectteam });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
