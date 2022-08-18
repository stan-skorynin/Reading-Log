import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  statusList = ["Completed", "Reading", "Abandoned"];
  bookForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

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

  addBook() {
    if (this.bookForm.valid) {
      this.api.postBook(this.bookForm.value)
        .subscribe({
          next: (res) => {
            alert("Book added successfully")
          },
          error: () => {
            alert("Error")
          }
        })
    }
  }
}
