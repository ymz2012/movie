/**
 * Created by ymz on 16/10/14.
 */


var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views','./views')
app.set('view engine','jade')
app.listen(port)

console.log('movie started on port ' + port)
/*
app.set('port',3000)

app.get('/',function(req,res){
    res.render('index',{title:'movie'})
})
*/
