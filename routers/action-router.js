const express = require('express');

const db = require('../data/helpers/actionModel.js');

const router = express.Router();


// Request Handlers

// GET --> /api/actions
router.get('/', (req, res) => {
  // Stuff
  db.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      console.log(err);
      res.status(500);
    })
});

// GET ==> /api/actions/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  db.get(id)
    .then(action => {
      return action
        ? res.status(200).json(action)
        : res.status(404).json({ message: "No actions with specified ID." });
    })
    .catch(err => {
      console.log(err);
      res.status(500);
    })
});

// POST --> /api/actions
router.post('/', (req, res) => {
  const { project_id, description, notes } = req.body;
  const newAction = req.body;

  if ( !project_id || !description || !notes ){
    return res.status(400).json({ message: "Please provide the following keys: project_id, description, notes" });
  } else if ( description.length >= 129 ){
    return res.status(400).json({ message: "Invalid: 'Description string must be 128 characters or less." });
  }
  db.insert(newAction)
    .then(action => {
      res.status(200).json(action)
    })
    .catch(err => {
      console.log(err);
      res.status(500);
    })
});

// PUT --> /api/actions/:id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { project_id, description, notes } = req.body;
  const changes = req.body;

  if ( !project_id || !description || !notes ){
    return res.status(400).json({ message: "Please provide the following keys: project_id, description, notes" });
  } else if ( description.length >= 129 ){
    return res.status(400).json({ message: "Invalid: 'Description string must be 128 characters or less." });
  }

  return !id
    ? res.status(404).json({ message: "No action under the specified ID" })
    : db.update(id, changes)
      .then(updated => {
        res.status(200).json(updated);
      })
      .catch(err => {
        console.log(err);
        res.status(500);
      })
})

// DELETE --> /api/actions/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  return !id  
    ? res.status(404).json({ message: "No action under the specified ID" })
    : db.remove(id)
      .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      console.log(err);
      res.status(500);
    })
})

module.exports = router;