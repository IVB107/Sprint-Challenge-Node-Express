const express = require('express');

const db = require('../data/helpers/projectModel.js');

const router = express.Router();

// Request Handlers

// GET --> /api/projects
router.get('/', (req, res) => {
  // Stuff
});

// GET ==> /api/projects/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  // Stuff
});

// POST --> /api/projects
router.post('/', (req, res) => {
  // Stuff
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