import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/module/budget-item';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css']
})
export class BudgetItemCardComponent implements OnInit {

@Input() item: BudgetItem;
@Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
 onXButtonClick(){
   this.xButtonClick.emit();
 }

}
