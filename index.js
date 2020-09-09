const express = require('express');
const ejs = require('ejs');
const app = new express();

app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/about', (req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'pages/about.html'));
    res.render('about');
})

app.get('/contact', (req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
    res.render('contact');
})

app.get('/post', (req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'pages/post.html'));
    res.render('post');
})



app.listen(4000, ()=> {
    console.log('App listening on port 4000')
});

