import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('database3', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    define: {
        timestamps: true, // Enable timestamps (createdAt and updatedAt)
        underscored: true, // Use snake_case for column names
    },
});

// Define the Project model
export const Resources = sequelize.define('Resource', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    resourceName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
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
});

// Synchronize the model with the database (create the table if it doesn't exist)
sequelize.sync()
    .then(() => {
        console.log('Resource table created successfully.');
    })
    .catch((err) => {
        console.error('Error creating Resource table:', err);
    });

export default Resources;
