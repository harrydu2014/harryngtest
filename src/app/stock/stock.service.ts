import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class StockService {

  constructor(public http:HttpClient) { }

  // private stocks:Stock[] = [
  //   new Stock(1,"1st Stock",1.99,3.5,"testing",["AI","BlockChain"]),
  //   new Stock(2,"2nd Stock",1.99,1.5,"testing",["Cloud"]),
  //   new Stock(3,"3rd Stock",1.99,3.5,"testing",["AI","BlockChain","Cloud"]),
  //   new Stock(4,"4th Stock",1.99,4.5,"testing",["AI","BlockChain","Cloud"]),
  //   new Stock(5,"5th Stock",1.99,1.5,"testing",["AI","BlockChain","Cloud"]),
  //   new Stock(6,"6th Stock",1.99,2.5,"testing",["AI","BlockChain","Cloud"]),
  //   new Stock(7,"7th Stock",1.99,2.0,"testing",["AI","BlockChain","Cloud"])
  // ];

  getStocks(): Observable<any>{
    // return this.http.get('/api/stock').map(res => res.json());
    return this.http.get('/api/stock').pipe(map((res: Response) => res))
  }

  getStock(id:number): Observable<any>{
    // return this.http.get('/api/stock').map(res => res.json());
    return this.http.get('/api/stock/' + id).pipe(map((res: Response) => res));
  }
  // getStock(id:number): Stock {
  //   var stock = this.stocks.find(stock => stock.id == id)
  //   if(!stock) {
  //     stock = new Stock(0,"",0,0,"",[])
  //   } 
  //   return stock;
  // }
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