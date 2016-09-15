import { Component, OnInit, ElementRef, ViewChild, NgZone, Input } from '@angular/core';


@Component({
  selector: 'app-tempeditor',
  template: `
    <ckeditor [(ngModel)]="content" debounce="500"  >
      <p>Hello <strong>world</strong></p>
    </ckeditor>
    <div [innerHTML]="content"></div>
  `,
  styleUrls: ['tempeditor.component.css']
})
export class TempeditorComponent implements OnInit {
  content: any;
  constructor(private _zone: NgZone) {
    console.log("testtttt11111");
    this.content = `<p>My HTML22</p>`;
   }

  ngOnInit() {
    //    CKEditor..replace( targetId );
  }
  // afterAll() {

  // }
}
