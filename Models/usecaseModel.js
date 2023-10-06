import { Sequelize, DataTypes } from 'sequelize';
import { Project } from '../Models/projectModel.js'
import { Resources } from '../Models/ResourceModel.js'

const sequelize = new Sequelize('database3', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    define: {
        timestamps: true, // Enable timestamps (createdAt and updatedAt)
        underscored: true, // Use snake_case for column names
    },
});

// Define the Usecase model
export const Usecase = sequelize.define('Usecase', {
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
        allowNull: false,
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
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    createdBy: DataTypes.STRING, // Add createdBy field
    updatedBy: DataTypes.STRING, // Add updatedBy field
    status: DataTypes.STRING,
});

Usecase.belongsTo(Project, { foreignKey: 'projectId' });
Usecase.belongsTo(Resources, { foreignKey: 'resourceId' });

// Synchronize the model with the database (create the table if it doesn't exist)
sequelize.sync()
    .then(() => {
        console.log('Usecase table created successfully.');
    })
    .catch((err) => {
        console.error('Error creating Usecase table:', err);
    });

export default Usecase;
