import { Resources } from "../Models/ResourceModel.js";
export const addResources = async (req, res) => {
    try {
        const user = req.body;
        const newUser = new Resources(user);
        await newUser.save();
        res.status(200).json({ data: user });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//  updated resource
export const updateResources = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedResourceData = req.body;

        // Check if the project with the given ID exists
        const existingResource = await Resources.findByPk(id);

        if (!existingResource) {
            return res.status(404).json({ message: 'Resource not found' });
        }

        // Update the existing project with the new data
        existingResource.set(updatedResourceData);
        await existingResource.save();

        res.status(200).json({ data: existingResource });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Delete a project by ID
// export const deleteProject = async (req, res) => {
//     try {
//         const projectId = req.params.id;

//         // Check if the project exists
//         const project = await Project.findByPk(projectId);

//         if (!project) {
//             return res.status(404).json({ message: 'Project not found' });
//         }

//         // Delete the project
//         await Project.destroy({
//             where: {
//                 id: projectId,
//             },
//         });

//         res.status(200).json({ message: 'Project deleted successfully' });

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };


// get all project 
export const getResources = async (req, res) => {
    try {
        const resource = await Resources.findAll({})
        res.status(200).json(resource);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const getResource = async (req, res) => {
    try {
        const id = req.params.id;
        const getResource = req.body;

        // Check if the use case with the given ID exists
        const existingResource = await Resources.findByPk(id);

        if (!existingResource) {
            return res.status(404).json({ message: 'Resource not found' });
        }

        // Update the existing use case with the new data
        existingResource.set(getResource);
        await existingResource.save();

        res.status(200).json({ data: existingUsecase });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
