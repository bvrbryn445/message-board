var express = require('express');
var router = express.Router();

const Message = require('../models/message')

// const messages = [
// 	{
// 		text: "Hi there!",
// 		user: "Amando",
// 		added: new Date()
// 	},
// 	{
// 		text: "Hello World!",
// 		user: "Charles",
// 		added: new Date()
// 	}
// ];

/* GET home page. */
router.get('/', async (req, res, next) => {
	const messages = await Message.find({}) || []
	console.log(messages)
	res.render('index', { title: "Mini Messageboard", messages })
});

router.get('/new', function (req, res, next) {
	res.render('form')
})

router.post('/new', async (req, res, next) => {
	const { message, user }  = req.body;

	const newMessage = new Message({ text: message, user });
	await newMessage.save()
	res.redirect('/')
})

module.exports = router;
