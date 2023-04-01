const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
	text: { type: String, required: true },
	user: { type: String, required: true },
	added: { type: mongoose.Schema.Types.Date, default: new Date() }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message