const express = require('express');

const db = require('../data/helpers/projectModel.js');

const router = express.Router();

// Request Handlers

// GET --> /api/projects
router.get('/', (req, res) => {
  db.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err =>{
      console.log(err);
      res.status(500);
    })
});

// GET ==> /api/projects/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  db.get(id)
    .then(project => {
      return !project || !project === id
      ? res.status(404).json({ message: "No projects with specified ID." })
      : res.status(200).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500);
    })
});


// POST --> /api/projects
router.post('/', (req, res) => {
  const { name, description } = req.body;
  const newProject = req.body;

  return !name || !description
    ? res.status(400).json({ message: "Please provide the following keys: name, description." })
    : db.insert(newProject)
      .then(action => {
        res.status(200).json(action)
      })
      .catch(err => {
        console.log(err);
        res.status(500);
      })
});

// PUT --> /api/projects/:id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  if ( !changes.name || !changes.description ){
    return res.status(400).json({ message: "Please provide the following keys: name, description." })
  }

  return !id
    ? res.status(404).json({ message: "No project under the specified ID." })
    : db.update(id, changes)
      .then(updated => {
        res.status(200).json(updated);
      })
      .catch(err => {
        console.log(err);
        res.status(500);
      })
})

// DELETE --> /api/projects/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  // Stuff
})


module.exports = router;