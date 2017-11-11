const express = require('express')
const info = require('../db')
const mysql = require('mysql')
const cors = require('cors')
var router = express.Router()



// create connection
const db = mysql.createConnection({
    host     : info.localhost,
    user     : info.user,
    password : info.pass,
    database : info.database
})

router.get('/', function(req, res){
    res.render('index', {pageTitle: "CRUD App"})
})

router.get('/new', function(req, res){
    res.render('new', {pageTitle: "new page"})
})

router.post('/new', function(req, res){
    var data = {}
    // insert title, content, timestamp
    //console.log("insert data")
    //console.log(req.body)
    //res.send(req.body);
    //console.log("title: ", req.body.title)
    //console.log("content: ", req.body['content'])
    let timestamp = new Date()
    //console.log("timestamp: ", timestamp )
    data = {
        title: req.body.title,
        content: req.body.content,
        timestamp: timestamp
    }
    // store data
    storeDATA(data)
    res.redirect('/list')
})

// save data
router.post('/update', function(req, res){
    console.log("update data")
    console.log(req.body)
    var id = req.body.id
    var title = req.body.title
    var content = req.body.content
    let timestamp = new Date()
    var param = [title, content, timestamp, id]
    console.log("param: ", param)
    const sql = "UPDATE article SET title = ?, content = ?, timestamp = ? WHERE id = ?"
    db.query(sql, param, function(err, results, fields){
        if(err) { 
            console.log("err: ", err)
        } else {
            //console.log(results)
            console.log("has been updated!!!!")
            //res.send("has been updated")
            res.send(req.body)
        }
    })
})

router.get('/list', function(req, res){
    // access db
    // read data
    //console.log("list")
    //res.render('list', {title: "list page"})
    var data = {}
    // sql
    const sql = "SELECT * FROM article;"
    // execute sql
    db.query(sql, function(err, results, fields) {
        if(err) { console.log("err: " + err) } 
		for(var i=0; i<results.length; i++) {
		    data[i] = {
					id: results[i].id,
					title: results[i].title,
					content: results[i].content,
					timestamp: results[i].timestamp
			}
        }
        res.render('list', {
            pageTitle: "Title list",
			data
        })
    })
    
})


router.get('/detail/:id', function(req, res){
    console.log("display detail")
    data = {}
    var articleId = req.params.id
    console.log("articleID: ", articleId)
    const sql = 'SELECT * FROM article WHERE id=' + articleId
    db.query(sql, function(err, results, fields){
        //console.log(results[0].title)
        if(err) {
            console.log("error: ",err)
        } else {
            data = {
                title: results[0].title,
                content: results[0].content,
                timestamp: results[0].timestamp,
                id: articleId
            }
            console.log("data: ", data)
            res.render('detail', {
                pageTitle: "detail",
			    data
            })

        }
    })
})

// delete post
router.post('/del/:id', function(req, res) {
    var articleId = req.params.id
    console.log("delete post: " + articleId )
    const sql = "DELETE From article WHERE id=" + articleId
    db.query(sql, function(err, results, fields){
        if(err) {
            console.log("err: ", err)
        } else {
            console.log("id: " + articleId + "　deleted")
            res.send("has been deleted")
        }
    })
})

function storeDATA(data) {
    const post = {title:data.title, content: data.content, timestamp: data.timestamp}
    const sql = "INSERT INTO article SET ?"
    db.query(sql, post, function(err, results, fields){
        if(err) { 
            console.log("err: ", err)
        } else {
            console.log("stored data")
        }
    })
}

module.exports = router
