import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  statusList = ["Completed", "Reading", "Abandoned"];
  bookForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      genre: ['', Validators.required],
      status: ['', Validators.required],
      page: ['', Validators.required],
      comment: ['', Validators.required],
      date: ['', Validators.required]
    })
  }

  addProduct() {
    console.log(this.bookForm.value);
  }

}
