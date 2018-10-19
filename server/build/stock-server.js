"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('test');
var express = require("express");
var ws_1 = require("ws");
var app = express();
app.get('/', function (request, response) { return response.send('this is the home page!!!!'); });
app.get('/api/stock', function (request, response) {
    var result = stocks;
    var params = request.query;
    if (params.name) {
        result = result.filter(function (stock) { return stock.name == params.name; });
    }
    response.json(result);
});
app.get('/api/stock/:id', function (request, response) {
    console.log(request.params.id);
    response.json(stocks.find(function (stock) { return stock.id == request.params.id; }));
});
var server = app.listen(8000, 'localhost', function () {
    console.log('Node server starttd. http://localhost:8000');
});
var subscriptions = new Set();
var messageCount = 0;
var wsServer = new ws_1.Server({ port: 8081 });
wsServer.on('connection', function (websocket) {
    console.log('123123123');
    // websocket.send('welcome');
    subscriptions.add(websocket);
});
setInterval(function () {
    subscriptions.forEach(function (ws) {
        if (ws.readyState === 1) {
            ws.send(JSON.stringify({ messageCount: messageCount++ }));
        }
        else {
            subscriptions.delete(ws);
        }
    });
}, 2000);
var Stock = /** @class */ (function () {
    function Stock(id, name, price, rating, desc, categories) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Stock;
}());
exports.Stock = Stock;
var stocks = [
    new Stock(1, "1st Stock", 1.99, 3.5, "testing", ["AI", "BlockChain"]),
    new Stock(2, "2nd Stock", 1.99, 1.5, "testing", ["Cloud"]),
    new Stock(3, "3rd Stock", 1.99, 3.5, "testing", ["AI", "BlockChain", "Cloud"]),
    new Stock(4, "4th Stock", 1.99, 4.5, "testing", ["AI", "BlockChain", "Cloud"]),
    new Stock(5, "5th Stock", 1.99, 1.5, "testing", ["AI", "BlockChain", "Cloud"]),
    new Stock(6, "6th Stock", 1.99, 2.5, "testing", ["AI", "BlockChain", "Cloud"]),
    new Stock(7, "7th Stock", 1.99, 2.0, "testing", ["AI", "BlockChain", "Cloud"])
];
