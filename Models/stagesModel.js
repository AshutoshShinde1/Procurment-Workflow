import { Sequelize, DataTypes } from 'sequelize';

import { Resources } from '../Models/ResourceModel.js'
import { Usecase } from '../Models/usecaseModel.js'



const sequelize = new Sequelize('database3', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    define: {
        timestamps: true, // Enable timestamps (createdAt and updatedAt)
        underscored: true, // Use snake_case for column names
    },
});

// Define the Stage model
export const Stage = sequelize.define('Stage', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    createdBy: {
        type: DataTypes.STRING,
    },
    updatedBy: {
        type: DataTypes.STRING,
    },
    createdOn: {
        type: DataTypes.STRING,
    },
    updatedOn: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
    resourceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'resources',
            key: 'id',
        },
    },
    usecaseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usecases',
            key: 'id',
        },
    },
});

Stage.belongsTo(Resources, { foreignKey: 'resourceId' });
Stage.belongsTo(Usecase, { foreignKey: 'usecaseId' });


// Synchronize the model with the database (create the table if it doesn't exist)
sequelize.sync()
    .then(() => {
        console.log('Stage table created successfully.');
    })
    .catch((err) => {
        console.error('Error creating Stage table:', err);
    });

export default Stage;
