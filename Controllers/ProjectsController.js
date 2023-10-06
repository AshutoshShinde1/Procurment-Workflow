import { Project } from "../Models/projectModel.js";

// add new project
export const addProject = async (req, res) => {
    try {
        const user = req.body;
        const newUser = new Project(user);
        await newUser.save();
        res.status(200).json({ data: user });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//  updated project
export const updateProject = async (req, res) => {
    try {
        const projectId = req.params.id;
        const updatedProjectData = req.body;

        // Check if the project with the given ID exists
        const existingProject = await Project.findByPk(projectId);

        if (!existingProject) {
            return res.status(404).json({ message: 'Project not found' });
        }

        // Update the existing project with the new data
        existingProject.set(updatedProjectData);
        await existingProject.save();

        res.status(200).json({ data: existingProject });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Delete a project by ID
export const deleteProject = async (req, res) => {
    try {
        const projectId = req.params.id;

        // Check if the project exists
        const project = await Project.findByPk(projectId);

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        // Delete the project
        await Project.destroy({
            where: {
                id: projectId,
            },
        });

        res.status(200).json({ message: 'Project deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// get all project 
export const getProjectList = async (req, res) => {
    try {
        const project = await Project.findAll({})
        res.status(200).json(project);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getProject = async (req, res) => {
    try {
        const projectId = req.params.id; // Assuming 'id' is the path parameter name
        const project = await Project.findByPk(projectId);

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json({ data: project });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getProjectUsecases = async (req, res) => {
    try {
        const projectId = req.params.id; // Get the project ID from the path parameter

        // Assuming you have a relationship between Project and UseCase models
        const project = await Project.findById(projectId).populate('usecases');

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        const usecases = project.usecases;

        // Assuming UsecaseDTO is a transformation of the UseCase model to DTO
        const usecaseDTOs = usecases.map(usecase => new UsecaseDTO(usecase));

        res.status(200).json(usecaseDTOs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


