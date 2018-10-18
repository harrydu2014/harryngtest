console.log('test');

import * as express from 'express';
const app = express();

app.get('/',(request, response) => response.send('this is the home page!!!!'));

app.get('/stock',(request, response) => {
    response.json(stocks)
});

app.get('/stock/:id',(request, response) => {
    console.log(request.params.id);
    response.json(stocks.find((stock) => stock.id == request.params.id));
});

const server = app.listen(8080, 'localhost', () => {
    console.log('Node server starttd. http://localhost:8080');
});

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