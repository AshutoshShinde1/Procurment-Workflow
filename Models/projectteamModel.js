import { Sequelize, DataTypes } from 'sequelize';
import { Project } from './projectModel.js'; // Correct the import paths
import { Resources } from './ResourceModel.js'; // Correct the import paths

const sequelize = new Sequelize('database3', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    define: {
        timestamps: true, // Enable timestamps (createdAt and updatedAt)
        underscored: true, // Use snake_case for column names
    },
});

// Define the Projectteam model
export const Projectteam = sequelize.define('Projectteam', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdBy: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    updatedBy: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdOn: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    updatedOn: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'projects', // Change 'projects' to 'Project'
            key: 'id',
        },
    },
    resourceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'resources', // Change 'resources' to 'Resource'
            key: 'id',
        },
    },
});

// Define the associations
Projectteam.belongsTo(Project, { foreignKey: 'projectId' });
Projectteam.belongsTo(Resources, { foreignKey: 'resourceId' });

// Synchronize the model with the database (create the table if it doesn't exist)
sequelize.sync()
    .then(() => {
        console.log('Projectteam table created successfully.');
    })
    .catch((err) => {
        console.error('Error creating Projectteam table:', err);
    });

export default Projectteam;
