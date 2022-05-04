const cities = require('./db.json');
const spots = require('./spotsDb.json');

module.exports = () =>({
cities: cities,
spots: spots
})