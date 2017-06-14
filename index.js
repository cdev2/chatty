const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const messages = [{message: "My first return message"}]

app.use(express.static('assets'));
app.use(bodyParser.json());

//app.get('/messages/:name', function (req, res, next) {
//    console.log(req.params)
//    console.log(req.query)
//    res.status(200).json({ messages: messages });
//});

app.get('/messages', function(req, res, next) {
    
    res.status(200).json({messages: messages})
})

app.post('/messages', function (req, res, next) {
    messages.push({
        message: req.body.message,
        time: new Date(),
        length: req.body.message.length
    });
    res.status(200).json({ messages: messages });
    
    console.log(req.body);
});


app.listen(3000,function(){
console.log("listening on port 3000")    
})
