exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: '1VWSE21GX8G405193',
          make: 'Volkswagen',
          model: 'Jetta',
          mileage: 100,
        },
        {
          VIN: '1G1YY22R669832713',
          make: 'Chevrolet',
          model: 'Cruze',
          mileage: 400,
          transmission: 'automatic',
          titleStatus: 'clean',
        },
      ]);
    });
};
