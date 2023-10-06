import { Sequelize, DataTypes } from 'sequelize';
import { Project } from '../Models/projectModel.js'
import { Resources } from '../Models/ResourceModel.js'

const sequelize = new Sequelize('database3', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres', // Change to your database dialect if needed (e.g., 'postgres')
    logging: false,
    define: {
        timestamps: true, // Enable timestamps (createdAt and updatedAt)
        underscored: true, // Use snake_case for column names
    },
});

export const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    startDate: {
        type: DataTypes.STRING, // Assuming you store dates as strings
    },
    endDate: {
        type: DataTypes.STRING, // Assuming you store dates as strings
    },
    dueDate: {
        type: DataTypes.STRING, // Assuming you store dates as strings
    },
    createdBy: {
        type: DataTypes.STRING,
    },
    updatedBy: {
        type: DataTypes.STRING,
    },
    createdOn: {
        type: DataTypes.STRING, // Assuming you store dates as strings
    },
    updatedOn: {
        type: DataTypes.STRING, // Assuming you store dates as strings
    },
    status: {
        type: DataTypes.STRING,
    },
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'projects',
            key: 'id',
        },

    },
    resourceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'resources',
            key: 'id',
        },
    },
});

Task.belongsTo(Project, { foreignKey: 'projectId' });
Task.belongsTo(Resources, { foreignKey: 'resourceId' });
// Synchronize the model with the database (create the table if it doesn't exist)
sequelize.sync()
    .then(() => {
        console.log('Task table created successfully.');
    })
    .catch(err => {
        console.error('Error creating Task table:', err);
    });

export default Task;

