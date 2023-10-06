import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import cors from 'cors';

import Projects from './Routes/Projects.js';
import Task from './Routes/Task.js';
import Usecase from './Routes/usecases.js';
import Stage from './Routes/stages.js';
import subStage from './Routes/subStages.js';
import Resource from './Routes/Resource.js';
import ProjectTeam from './Routes/Projectteam.js';






import dbConfig from './dbConfig.js';

const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Create a PostgreSQL pool using the configuration
new pg.Pool(dbConfig);

// Using route
app.use('/api', Projects);
app.use('/api', ProjectTeam);
app.use('/api', Usecase);
app.use('/api', Stage);
app.use('/api', subStage);
app.use('/api', Resource);
app.use('/api', Task);


// Start the server
const PORT = 9000;
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
