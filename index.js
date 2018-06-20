var express = require('express')
var bodyParser = require('body-parser');

var wordbook = ['人力资源部','行政管理部','财务部','市场部','公共关系部','品牌推广部','品牌孵化运营部','运营管理部','网络信息部']
var app = express()
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.render("index")
})

app.post('/formcheck', function (req, res) {
    var userid = req.body.userid
    if (userid == "") {
        res.send("")
    } else {
        out = "<ul>"
        for (var i = 0; i < wordbook.length; i++) {
            if (wordbook[i].startsWith(userid)){
                out += "<li>" + wordbook[i] + "<li>"
            }
        }
        out += "</ul>"
        res.send(out)
    }
})

app.listen(3000)