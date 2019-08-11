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

router.post('/', async (req, res) => {
  const carData = req.body;

  try {
    const [id] = await db('cars').insert(carData);
    const [newCar] = await db('cars').where({ id });
    res.status(201).json(newCar);
  } catch (err) {
    res.status(500).json({ message: 'failed to add car', error: err });
  }
});

module.exports = router;
