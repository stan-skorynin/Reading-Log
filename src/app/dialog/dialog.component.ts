import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  statusList = ["Completed", "Reading", "Abandoned"];
  bookForm = FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
