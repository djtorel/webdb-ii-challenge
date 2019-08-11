const router = require('express').Router();

const db = require('../data/dbConfig');

router.get('/', async (req, res) => {
  try {
    const cars = await db('cars');
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
