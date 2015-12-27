module.exports = function(app) {
	var route = {};

	// index.html
	route.index = function (req, res) {
	  res.json({});
	};

	app.get('/', route.index);
};
