const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
	'mongodb+srv://learningnodefortomato:12341234@learningnodefortomato.go5tdld.mongodb.net/?retryWrites=true&w=majority',
	function (err, client) {
		if (err) {
			console.log(err);
		}

		db = client.db('codingapple');

		db.collection('post').insertOne(
			{ name: 'John', age: 20 },
			function (err, result) {
				console.log('저장완료');
			}
		);

		app.listen('8080', function () {
			console.log('listening on 8080');
		});
	}
);
// 서버 열기
// app.listen(8080, function () {
// 	console.log('listening on 8080');
// });

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/write', function (req, res) {
	res.sendFile(__dirname + '/write.html');
});

app.post('/add', function (req, res) {
	res.send('전송완료');
	console.log(req.body);
});
