module.exports = function(app)
{
const express = require('express');
    const db = require('../../models');
    const axios = require("axios");

    app.get('/test', (req, res) => {
        res.json({
            msg: 'notes routes works!'
        })
    })

    // app.get('/api/notes', (req, res)=>{

     
    // })


    app.post("/api/notes", (req, res)=>{
        console.log("here")
        const note ={
            title: req.body.title,
            content: req.body.content
        }
        db.Note.create(note)
        .then(()=>{
            res.json({
                success: true
            })
        })
        .catch(err => {
            throw err
        })

        
    })

}