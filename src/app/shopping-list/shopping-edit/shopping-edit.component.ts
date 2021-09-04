import { Component, OnInit,Input,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

 @Output() dataAdded  = new EventEmitter<{ name:string, amount: string }>();

 @Output() dataDeleted = new EventEmitter<void>();
  constructor() { }

  iname ='';
  iamount = ''; 
  ngOnInit() {
  }
    @Input() editData:{name:string,amount:string};

    onAdd()
    {
      this.dataAdded.emit({
         name : this.iname,
         amount : this.iamount 
          });
      
    }

    onDelete()
    {
      this.dataDeleted.emit();
    }

}
