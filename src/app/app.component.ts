import { Component} from '@angular/core';//,Directive, ComponentMetadata, Input, ReflectiveInjector, ViewContainerRef, Compiler,NgModule 
import { AngularFire, FirebaseListObservable } from 'angularfire2';

// @Directive({
//   selector: '[dynamicContent]',
// })
// export class DynamicTemplate {
//   @Input('dynamicContent') private template: string;
//   @Input('dynamicContentSelector') private selector: string;
//   @Input('dynamicContentContext') private context: Object;

//   constructor(private viewRef: ViewContainerRef, private compiler: Compiler) { }

//   private _createDynamic() {
//     this.context = this.context || {};

//     const metadata = new ComponentMetadata({
//       selector: this.selector,
//       template: this.template,
//     });

//     const cmpClass = class _ { };
//     cmpClass.prototype = this.context;
//     return Component(metadata)(cmpClass);
//   }

//   ngOnChanges() {
//     if (!this.template) return;
//     this.compiler.compileComponentAsync(this._createDynamic())
//       .then(factory => {
//         const injector = ReflectiveInjector.fromResolvedProviders([], this.viewRef.parentInjector);
//         this.viewRef.clear();
//         this.viewRef.createComponent(factory, 0, injector);
//       });
//   }
// }


@Component({
  //moduleId: module.id,
  selector: 'app-root',
  templateUrl: `
  <div *dynamicContent="html; context:self; selector:'my-dynamic-component'"></div>
  `,//'app.component.html',//
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works2222!';
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
    <button (click)="self.saveForm('dynamic component')">Save</button>`;
  }
  saveForm(message: string) {
    //save end user submited form data 
  }
}