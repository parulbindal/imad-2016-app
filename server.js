var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'article-one' :{
    title: 'Article-0ne | PBindal',
    date:'Oct 4 2016',
    heading:'Article one',
    content:`
                <p>
                    Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla!
                </p>
                 <p>
                    Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla!
                </p>
                 <p>
                    Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla!
                </p>`
    
},
'article-two' : { title: 'Article-Two | PBindal',
    date:'Oct 5 2016',
    heading:'Article two',
    content:`
                <p>
                    Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla!
                </p>
                
                </p>`},
'article-three' : { title: 'Article-three | PBindal',
    date:'Oct 6 2016',
    heading:'Article three',
    content:`
                <p>
                    Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla!
                </p>
                
                </p>`}
};
function createTemplate(data){
var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;
var htmlTemplate=`<html>
    <head>
        <title>
           ${title}
           
        </title>
         <meta name = "viewport" content="width-device-width,initial-scale=1 "/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class= "container">
            <a href="/">Home</a>
            <hr/>
            <div>
               ${heading}
            </div>
            <div>
                ${date}
            </div>
            <div>
               ${content}
            </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req, res){
    //articleName = article-one
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var counter = 0;
app.get('/counter',function(req,res){
    counter= counter + 1;
   res.send("fhfhffh"); 
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
