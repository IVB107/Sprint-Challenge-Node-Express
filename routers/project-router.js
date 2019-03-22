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
      return project
        ? res.status(200).json(project)
        : res.status(404).json({ message: "No projects with specified ID." });
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
    ? res.status(400).json({ message: "Please provide the following keys: name, description" })
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

  // Stuff
})

// DELETE --> /api/projects/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  // Stuff
})


module.exports = router;