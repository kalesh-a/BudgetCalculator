import { BudgetItem } from './../../shared/module/budget-item';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget-items',
  templateUrl: './budget-items.component.html',
  styleUrls: ['./budget-items.component.css']
})
export class BudgetItemsComponent implements OnInit {
  @Input() budgetItems : BudgetItem[];
  // @Input() item: BudgetItem = new BudgetItem("",null);
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(item: BudgetItem){
 this.delete.emit(item);
  }
  

}
