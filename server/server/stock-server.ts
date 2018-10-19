console.log('test');

import * as express from 'express';
import * as path from 'path';
import { Server } from 'ws';
const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'client')));

app.get('/',(request, response) => response.send('this is the home page!!!!'));

app.get('/api/stock',(request, response) => {
    let result = stocks;
    let params = request.query;
    if(params.name) {
        result =  result.filter(stock => stock.name == params.name)
    }
    response.json(result)
});

app.get('/api/stock/:id',(request, response) => {
    console.log(request.params.id);
    response.json(stocks.find((stock) => stock.id == request.params.id));
});

const server = app.listen(8000, 'localhost', () => {
    console.log('Node server starttd. http://localhost:8000');
});

var subscriptions = new Set<any>();

var messageCount = 0;

const wsServer =  new Server({port:8081});

wsServer.on('connection', websocket => {
    console.log('123123123');
    // websocket.send('welcome');
    subscriptions.add(websocket);
})

setInterval(() => {
    subscriptions.forEach(ws => {
        if(ws.readyState === 1) {
            ws.send(JSON.stringify({messageCount: messageCount++}))
        }else{
            subscriptions.delete(ws);
        }
    })
}, 2000);

export class Stock {
    constructor(
      public id:number,
      public name:string,
      public price:number,
      public rating:number,
      public desc:string,
      public categories:Array<string>
  
    ) { }
}


const stocks: Stock[] = [
    new Stock(1,"1st Stock",1.99,3.5,"testing",["AI","BlockChain"]),
    new Stock(2,"2nd Stock",1.99,1.5,"testing",["Cloud"]),
    new Stock(3,"3rd Stock",1.99,3.5,"testing",["AI","BlockChain","Cloud"]),
    new Stock(4,"4th Stock",1.99,4.5,"testing",["AI","BlockChain","Cloud"]),
    new Stock(5,"5th Stock",1.99,1.5,"testing",["AI","BlockChain","Cloud"]),
    new Stock(6,"6th Stock",1.99,2.5,"testing",["AI","BlockChain","Cloud"]),
    new Stock(7,"7th Stock",1.99,2.0,"testing",["AI","BlockChain","Cloud"])
  ];