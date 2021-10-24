import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '../shared/models/card_model';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit{
  @Input() note!: CardModel;
  @Output() noteDeleted = new EventEmitter<{ id: number }>();
  @Output() noteEdited = new EventEmitter<{ id: number, content: string, editdate: Date }>();
  constructor() { }
  ngOnInit(): void {
  }
  onDelete(e : MouseEvent)
  {
    this.noteDeleted.emit({
      id: this.note.id
    });
  }
  onEdit(noteText: HTMLTextAreaElement, applyEdit: HTMLButtonElement)
  {
    noteText.removeAttribute("readonly");
    applyEdit.removeAttribute("disabled");
  }
  onEditDone(noteText: HTMLTextAreaElement, applyEdit: HTMLButtonElement)
  {
    noteText.setAttribute("readonly","true");
    this.noteEdited.emit({
      id: this.note.id,
      content: noteText.value,
      editdate: new Date()
    })
    applyEdit.setAttribute("disabled","true");
  }
}
