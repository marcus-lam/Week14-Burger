var connection = require('../config/connection.js');

var orm = {
	selectAll: function (callback) {
		connection.query('SELECT * FROM burgers', function (err, result) {
			if (err) throw err;
			callback(result);
		});
	},

	insertOne: function (burger, callback) {
		connection.query('INSERT INTO burgers (burger_name) VALUES (?)', [burger], function (err, result) {
			if (err) throw err;
			callback(result);
		});
	},

	updateOne: function (devoured, id, callback) {
		connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [devoured, id], function (err, result) {
			if (err) throw err;
			callback(result);
		});
	}
};

module.exports = orm;