import { Sequelize, DataTypes } from 'sequelize';

import { Resources } from '../Models/ResourceModel.js'
import { Stage } from '../Models/stagesModel.js'


const sequelize = new Sequelize('database3', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    define: {
        timestamps: true, // Enable timestamps (createdAt and updatedAt)
        underscored: true, // Use snake_case for column names
    },
});

// Define the SubStage model
export const Substage = sequelize.define('Substage', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    comments: {
        type: DataTypes.STRING,
    },
    startDate: {
        type: DataTypes.STRING,
    },
    endDate: {
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
    stageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'stages',
            key: 'id',
        }
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

Substage.belongsTo(Resources, { foreignKey: 'resourceId' });
Substage.belongsTo(Stage, { foreignKey: 'stageId' });


// Synchronize the model with the database (create the table if it doesn't exist)
sequelize.sync()
    .then(() => {
        console.log('SubStage table created successfully.');
    })
    .catch((err) => {
        console.error('Error creating SubStage table:', err);
    });

export default Substage;
