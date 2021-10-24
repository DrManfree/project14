import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

  @Output() noteCreated = new EventEmitter<{ title: string, content: string, createdate: Date}>();
  constructor() { 
  }

  ngOnInit(): void {
  }
  onAdd(noteNameInput : HTMLInputElement, noteContentInput: HTMLTextAreaElement) {
    let crDate = new Date();
    this.noteCreated.emit({
      title: noteNameInput.value,
      content: noteContentInput.value,
      createdate: crDate
    });
  }
}
