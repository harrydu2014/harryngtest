import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks:Array<Stock>;
  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock(1,"1st Stock",1.99,3.5,"testing",["AI","BlockChain","Cloud"]),
      new Stock(1,"2nd Stock",1.99,1.5,"testing",["AI","BlockChain","Cloud"]),
      new Stock(1,"3rd Stock",1.99,3.5,"testing",["AI","BlockChain","Cloud"]),
      new Stock(1,"4th Stock",1.99,4.5,"testing",["AI","BlockChain","Cloud"]),
      new Stock(1,"5th Stock",1.99,1.5,"testing",["AI","BlockChain","Cloud"]),
      new Stock(1,"6th Stock",1.99,2.5,"testing",["AI","BlockChain","Cloud"]),
      new Stock(1,"7th Stock",1.99,2.0,"testing",["AI","BlockChain","Cloud"]),
    ]
  }

}

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