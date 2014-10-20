var express = require('express'), expHbs  = require('express-handlebars'),
PORT = process.env.PORT || 5000,
app = express();


app.engine('hbs', expHbs({extname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');

//defines where assets are served from
app.use(express.static(__dirname + '/public'));


// for one home page
app.get('/', function(req,res){
  	var data = {title: 'Boilerplate express-handlebars-bootstrap'};
	res.render('home', data);
})

// for servo deployment
app.get('/_health', function (req, res) {
  res.send('ok');
});

var server = app.listen(PORT, function(){
	var host = server.address().address
	console.log('App listening at http://%s:%s', host, PORT)
})
