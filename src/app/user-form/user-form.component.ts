import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<string>();

  userForm: FormGroup;
  constructor(private fb: FormBuilder) { 


    this.userForm = this.fb.group({
    sicilNo: ['', Validators.required],
    personelID: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    telNo: ['', Validators.required]

  })
}

  ngOnInit(): void {
  }

  public addItem() : void {
    this.itemAdded.emit(this.userForm.value);
  }

}
