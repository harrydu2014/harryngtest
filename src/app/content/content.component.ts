import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// import 'rxjs/operator/filter'
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pageTitle = '';

  pageDesc = '';

  constructor(public router: Router) { 
    router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event:NavigationEnd) => {
      if(event.url == '/dashboard'){
        this.pageTitle = 'This is the Home Page';
        this.pageDesc = 'This is the Home Description';
      }else if(event.url.startsWith('/stock')){
        this.pageTitle = 'This is the Stock Page';
        this.pageDesc = 'This is the Stock Description';
      }
    })
   }

  ngOnInit() {
  }

}
