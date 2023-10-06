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
export const Project = sequelize.define('Project', {
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
  manager: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  resources: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: DataTypes.STRING,
  startDate: DataTypes.DATE,
  endDate: DataTypes.DATE,
  createdBy: DataTypes.STRING, // Add createdBy field
  updatedBy: DataTypes.STRING, // Add updatedBy field
  status: DataTypes.STRING,
  budget: DataTypes.STRING
});

// Synchronize the model with the database (create the table if it doesn't exist)
sequelize.sync()
  .then(() => {
    console.log('Project table created successfully.');
  })
  .catch((err) => {
    console.error('Error creating Project table:', err);
  });

export default Project;
