import { Component, OnInit } from '@angular/core';
import {CKEditor} from 'ng2-ckeditor';
@Component({
  selector: 'app-tempeditor',
  directives: [CKEditor],
  template: `
    <ckeditor [(ngModel)]="content" debounce="500"  [config]="{extraPlugins: 'divarea'}">
      <p>Hello <strong>world</strong></p>
    </ckeditor>
    <div [innerHTML]="content"></div>
  `,
  styleUrls: ['tempeditor.component.css']
})
export class TempeditorComponent implements OnInit {
  content: any;
  constructor() {
    this.content = `<p>My HTML</p>`;
   }

  ngOnInit() {
  }

}
