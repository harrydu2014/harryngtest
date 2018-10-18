import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  @Input()
  rating:number = 0;
  stars:boolean[];
  
  @Input()
  readonly:boolean = true;
  constructor() { }
  
  @Output()
  ratingChange: EventEmitter<number> =  new EventEmitter();

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges):void {
    this.stars = [];
    for(let i=1; i<=5; i++){
      this.stars.push(i > this.rating);
    }
  }
  
  clickStar(index:number){
    if(!this.readonly){
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }
}
