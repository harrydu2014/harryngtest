import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock-manage/stock-manage.component';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../stock.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  formModel: FormGroup;

  stock: Stock;

  categories = ["AI","BlockChain","Cloud"];

  constructor(private routeInfo:ActivatedRoute, private stockService:StockService, private router:Router) {
    
   }

  ngOnInit() {
    let stockId = this.routeInfo.snapshot.params["id"];
    this.stock = this.stockService.getStock(stockId);

    let fb =  new FormBuilder();
    this.formModel = fb.group(
      {
        name: [this.stock.name, [Validators.required, Validators.minLength(3)]],
        price: [this.stock.price, [Validators.required]],
        desc: [this.stock.desc, [Validators.required]],
        categories: fb.array([
          new FormControl(this.stock.categories.indexOf(this.categories[0]) != -1),
          new FormControl(this.stock.categories.indexOf(this.categories[1]) != -1),
          new FormControl(this.stock.categories.indexOf(this.categories[2]) != -1)
        ], this.categoriesSelectValidator)
      }
    );
  }
  
  categoriesSelectValidator(control:FormArray){
    var valid = false;
    control.controls.forEach(control => {
      if (control.value) {
        valid = true;
      }
    });
    if (valid) {
      return null;
    } else {
      return {
        categoriesLength: true
      };
    }
  }

  cancel() {
    this.router.navigateByUrl('/stock');
  }

  save() {
    var chineseCategories = [];
    var index = 0;
    for (var i = 0; i < 3; i++) {
      if(this.formModel.value.categories[i]) {
        chineseCategories[index++] = this.categories[i];
      }
    }

    this.formModel.value.categories = chineseCategories;
    this.formModel.value.rating = this.stock.rating;
    console.log(this.formModel.value);
    // console.log(this.stock.rating);
    // this.router.navigateByUrl('/stock');
  }
}
