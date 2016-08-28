import { Component} from '@angular/core';//,Directive, ComponentMetadata, Input, ReflectiveInjector, ViewContainerRef, Compiler,NgModule 
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  //moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',//
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works2222!';
  ckeditorContent = "aaa";
    self = this; // copy of context
  html = `
  <div> {{title}}
    <button (click)="self.setMessage('dynamic component')">Click</button>
  </div>`;
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {//
    //console.log("aaaa");
    this.items = af.database.list('items');
    
  }
  setMessage(message: string) {
    this.title = 'Changed title';
    this.html = `<div>{{title}}</div><ul><li class="text" *ngFor="let item of items | async">{{item.$value}}</li></ul>
    <button (click)="self.saveForm('dynamic component')">Save</button>
    `;
  
  }
  saveForm(message: string) {
    //save end user submited form data 
  }
}