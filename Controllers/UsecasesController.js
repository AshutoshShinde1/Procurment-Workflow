import { Usecase } from "../Models/usecaseModel.js";

// Add a new use case
export const addUsecase = async (req, res) => {
    try {
        const usecaseData = req.body;
        const newUsecase = new Usecase(usecaseData);
        await newUsecase.save();
        res.status(200).json({ data: newUsecase });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a use case by ID
export const updateUsecase = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUsecaseData = req.body;

        // Check if the use case with the given ID exists
        const existingUsecase = await Usecase.findByPk(id);

        if (!existingUsecase) {
            return res.status(404).json({ message: 'Use case not found' });
        }

        // Update the existing use case with the new data
        existingUsecase.set(updatedUsecaseData);
        await existingUsecase.save();

        res.status(200).json({ data: existingUsecase });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a use case by ID
export const deleteUsecase = async (req, res) => {
    try {
        const id = req.params.id;

        // Check if the use case exists
        const usecase = await Usecase.findByPk(id);

        if (!usecase) {
            return res.status(404).json({ message: 'Use case not found' });
        }

        // Delete the use case
        await Usecase.destroy({
            where: {
                id: id,
            },
        });

        res.status(200).json({ message: 'Use case deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all use cases
export const getUsecaseStages = async (req, res) => {
    try {
        const usecases = await Usecase.findAll({});
        res.status(200).json(usecases);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUsecase = async (req, res) => {
    try {
        const id = req.params.id;
        const getUsecase = req.body;

        // Check if the use case with the given ID exists
        const existingUsecase = await Usecase.findByPk(id);

        if (!existingUsecase) {
            return res.status(404).json({ message: 'Use case not found' });
        }

        // Update the existing use case with the new data
        existingUsecase.set(getUsecase);
        await existingUsecase.save();

        res.status(200).json({ data: existingUsecase });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
