const express = require('express')
const info = require('../db')
const mysql = require('mysql')
//const cors = require('cors')
let router = express.Router()

// create connection
const db = mysql.createConnection({
    host     : info.localhost,
    user     : info.user,
    password : info.pass,
    database : info.database
})

// GET
router.get('/price', (req, res)=> {
    // return price
})

router.get('/blocks', (req, res)=> {
    // return height
})

router.get('/minetime', (req, res)=> {
    // return mine-time
})

router.get('/messages', (req, res)=> {
    // return 5 messages
    // access mysql get the latest 5 messges
    let data = {} // add 5 messages

    // select * from '<table name>' order by '<col name>' limit 10;
    const sql = "SELECT * FROM message order by timestamp limit 5;"
    //console.log(sql)
    db.query(sql, function(err, results, fields) {
        
        if(err) { console.log("err: " + err) } 
		for(var i=0; i<results.length; i++) {
		    data[i] = {
					id: results[i].id,
					lang: results[i].lang,
					message: results[i].message,
					timestamp: results[i].timestamp
			}
        }
        //console.log(data)
        res.send(data)
    })
})

router.get('/allmessages', (req, res)=> {
    // return 5 messages
    // access mysql get the latest 5 messges
    let data = {} // add 5 messages

    // select * from '<table name>' order by '<col name>' limit 10;
    const sql = "SELECT * FROM message order by id;"
    //console.log(sql)
    db.query(sql, function(err, results, fields) {
        
        if(err) { console.log("err: " + err) } 
		for(var i=0; i<results.length; i++) {
		    data[i] = {
					id: results[i].id,
					lang: results[i].lang,
					message: results[i].message,
					timestamp: results[i].timestamp
			}
        }
        //console.log(data)
        res.send(data)
    })
})


// PUT
router.put('/message',(req, res)=>{
    // return joke message
    // Ex
    // "You can't change the message because your machine power isn't enough."
})


// POST
router.post('/message', (req,res)=>{
    let data = {}
    let encryption = req.body.encryption
    let lang = 'en' // default
    let timestamp = new Date()
    let message = req.body.message

    if(req.body.lang) {
        lang = req.body.lang
    }
    
    if(encryption) {
        // encrypt message
    }
    
    data = {
        lang: lang,
        message: message,
        timestamp: timestamp
    }

    storeDATA(data)
    // display success?
    //res.redirect('/success')
    res.send(timestamp)

})


// DELETE
router.delete('/message', (req, res)=>{
    // return joke message
    // Ex
    // "You can't change the message because your machine power isn't enough"
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
