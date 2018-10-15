import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks:Array<Stock>;
  constructor(public router:Router) { }

  ngOnInit() {
    this.stocks = [
      new Stock(1,"1st Stock",1.99,3.5,"testing",["AI","BlockChain","Cloud"]),
      new Stock(2,"2nd Stock",1.99,1.5,"testing",["AI","BlockChain","Cloud"]),
      new Stock(3,"3rd Stock",1.99,3.5,"testing",["AI","BlockChain","Cloud"]),
      new Stock(4,"4th Stock",1.99,4.5,"testing",["AI","BlockChain","Cloud"]),
      new Stock(5,"5th Stock",1.99,1.5,"testing",["AI","BlockChain","Cloud"]),
      new Stock(6,"6th Stock",1.99,2.5,"testing",["AI","BlockChain","Cloud"]),
      new Stock(7,"7th Stock",1.99,2.0,"testing",["AI","BlockChain","Cloud"]),
    ]
  }

  create() {
    this.router.navigateByUrl('/stock/0');
  }

  update(stock:Stock){
    this.router.navigateByUrl('/stock/'+stock.id);
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