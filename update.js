var request = require('request');
var cheerio = require('cheerio');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'performance'
});
var url = "post.html";
request(url, function (err, response, body) {
    if (err) throw err;
    $ = cheerio.load(body);
    var list = $('input')
    // for (var i = 0; i < list.length; i++) {
        var depart = list.eq(i).value;
        var week = list.eq(i).value;
        var score= list.eq(2).value
        console.log(depart,week,score)
        connection.query(
            'INSERT INTO performance (depart,week) VALUES(?,?)',
            [depart,week,score],
            function (error, results, fields) {
                if (error) console.log(error);
            }
        );
    // }
});
// connection.end();