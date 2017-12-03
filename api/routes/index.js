var express = require('express');
var router = express.Router();
var Hotlist = require('../model/hotlist')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/api/hotlist',function(req,res){
	var limit = req.query.limit;
	var offset = req.query.offset;
	var typelist = req.query.typelist;
	console.log(typelist)
	Promise.all([Hotlist.find({type:typelist},{},{limit:limit,skip:offset}),Hotlist.count({type:typelist})]).then(result=>{
		res.send({
			total:result[1],
			list:result[0]
		})
	})
})

router.get('/api/detail',function(req,res){
	Hotlist.find({
		_id:req.query.id
	}).then(result=>{
		res.send(result)
	})
});

router.get('/api/goodsdetail',function(req,res){
	Hotlist.find({
		_id:req.query.id
	}).then(result=>{
		res.send(result)
	})
});

router.get('/api/comment',function(req,res){
	Hotlist.find({
		_id:req.query.id
	}).then(result=>{
		res.send(result)
	})
})

router.get('/api/search',function(req,res){
	var reg = new RegExp(req.query.searchgoods)
	Hotlist.find({
		title:reg
	}).then(result=>{
		res.send(result)
	})
})

router.get('/api/catoinfo',function(req,res){
	Hotlist.find({
		catolog:req.query.catoinfo
	}).then(result=>{
		res.send(result)
	})
})
module.exports = router;
