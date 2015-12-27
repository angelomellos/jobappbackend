module.exports = function(app) {
	var route = {};

	// index.html
	route.index = function (req, res) {
	  res.send('hi');
	};

	app.get('/', route.index);
};
