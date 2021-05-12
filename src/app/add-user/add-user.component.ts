import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  tableData:any = [];

  constructor() { 

  }

  ngOnInit(): void {
  }

  handleItemAdded(userFormValue:any) {
    console.log(userFormValue);
    this.tableData.push(userFormValue);
  }

}
