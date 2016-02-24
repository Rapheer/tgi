var Filmes = require('../models/filme');

exports.index = function (req, res){
	res.render('index');
}


exports.lista = function (req, res){
	Filmes.find({}, function (err, filmes) {
		if (err) return console.log(err);
		res.json({filmes: filmes});
	});
}

exports.grava = function (req, res){
	var filme  = new Filmes(req.body);

	filme.save(function (err, filme){
		if(err) return console.log(err);
		res.send(filme);
	});
};