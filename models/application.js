'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var fields = {
	companyName: { type: String },
	submitted: { type: Date , default: Date.now },
	userId: {type: String}
};

var applicationSchema = new Schema(fields);

module.exports = mongoose.model('Application', applicationSchema);
