# Import necessary modules and libraries
```
import express
import bodyParser
import pg
import cors
import Sequelize.Op 
```
# Define constants
```
PORT = 9000
```

### `Function to start the server`
```
function startServer(app):
    app.listen(PORT, () => {
        outputMessage(`Server is running successfully on PORT ${PORT}`);
    })
```

### `Main function`
```
function main():
    app = createExpressApp()
    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    
    # You should create a database connection before using Sequelize
     createPool(dbConfig)
    
    app.post('/api/addProject', addProject)
    app.put('/api/updateProject/:id', updateProject)
    app.delete('/api/deleteProject/:id', deleteProject)
    app.get('/api/getAllProjects', getAllProjects)
    
    startServer(app)

```
# Define functions
### `1. Function to add a new project`
```
Method - POST
```
```
API End Point - /api/addProject
Request - req.body
Response - res.status(201).json({ data: newProject })
```
```
function addProject(req, res):
    try:
         Parse request data
        projectData = req.body
         Create a new project instance
        newProject = Project.create(projectData)
        res.status(201).json({ data: newProject })
    except error:
        res.status(500).json({ message: error.message })
```
```
	1. Routes forward request to controller
	2. Controller  calls models
	3. There is method defines in the controller - addProject;
		3.1 This addProject method accepts (req, res)
		3.2 this addProject returns the object
```
### `1.1 Function to update an existing project`
```
Method - PUT
```
```
API End Point - /api/updateProject/:id
Request - req.params.id
Response - res.status(200).json({ data: newProject })
```
```
function updateProject(req, res):
    try:
        projectId = req.params.id
        updatedProjectData = req.body
        existingProject = Project.findByPk(projectId)
        if not existingProject:
            res.status(404).json({ message: 'Project not found' })
        existingProject.update(updatedProjectData)
        res.status(200).json({ data: existingProject })
    except error:
        res.status(500).json({ message: error.message })
```
```
	1. Routes forward request to controller
	2. Controller  calls models
	3. There is method defines in the controller - updateProject;
		3.1 This updateProject method accepts (req, res)
		3.2 this updateProject returns the object
```
### `1.2 Function to delete a project by ID`
```
Method - DELETE
```
```
API End Point - /api/deleteProject/:id
Request - req.params.id
Response - res.status(200).json({ message: 'Project deleted successfully' });
```
```
function deleteProject(req, res):
    try:
        projectId = req.params.id
        project = Project.findByPk(projectId)
        if not project:
            res.status(404).json({ message: 'Project not found' })
        project.destroy()
        res.status(200).json({ message: 'Project deleted successfully' })
    except error:
        res.status(500).json({ message: error.message })
```
```
	1. Routes forward request to controller
	2. Controller  calls models
	3. There is method defines in the controller - deleteProject;
		3.1 This deleteProject method accepts (req, res)
		3.2 this deleteProject returns the res.status(200).json({ message: 'Project deleted successfully' })
```
### `1.3 Function to get all project lists`
```
Method - GET
```
```
API End Point - /api/getProject
Request - async (req, res)
Response - res.status(200).json(project);
```
```
function getAllProjects(req, res):
    try:
        projectList = Project.findAll({})
        res.status(200).json(projectList)
    except error:
        res.status(500).json({ message: error.message })
```
```
	1. Routes forward request to controller
	2. Controller  calls models
	3. There is method defines in the controller - getAllProjects;
		3.1 This getAllProjects method accepts (req, res)
		3.2 this getAllProjects returns the res.status(200).json(project);
```






