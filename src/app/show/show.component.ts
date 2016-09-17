import { Component, OnInit ,ElementRef,DynamicComponentLoader,Injector} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Subject, Observer} from 'rxjs/Rx';
//import {DynamicTemplate} from '../dynamictemplate/dynamictemplate.component';

// @Component({
//   selector: 'dna',
//   providers: [],
//   template: `
// <div *dynamicContent="html; context:self; selector:'my-dynamic-component'"></div>
//   `,
//   directives: []
// })
// export class DNA {

//   public data = {};
  
//   next(newSelection){
//     this.data = newSelection;
//   }  
//   constructor() {
//   }
  
// }

@Component({
  selector: 'app-show',
  templateUrl: 'show.component.html',
  styleUrls: ['show.component.css']
})
export class ShowComponent implements OnInit {
  html: string;
  data :string[];
  subject:Subject<any> = new Subject();
  constructor(public af: AngularFire,private loader: DynamicComponentLoader, private elementRef: ElementRef, public _injector:Injector) {
    let formname: string = "f01";
    
    this.af.database.object("/forms/" + formname).subscribe(res => {
      if (res) {
        let convertedHtml:string = this.ConvertToNg2Template(res.contenthtml);
        console.log("html=" + convertedHtml);
        this.html = convertedHtml;
      }
    }
    );
  }
  ConvertToNg2Template(src: string): string {
    return this.ConvertInputTextBox(src);
  }
  ConvertInputTextBox(src: string): string {
    //var src = '<input maxlength="11" name="aa" size="11" type="text" value="aa" />';
    var p2 = src.replace(/(input.+)(name=")(.+?)(".+)(type="text")/, function (match, prefix, handler,name, suffix, suffix2) {
      return prefix + '[(ngModel)]="data[0]' + suffix;
    });
    return p2;
  }
  saveFormData() {
    let formname: string = "f01";
    console.log("data=" + this.data);
    // this.af.database.object("/forms/" + formname + "/data").update({
    //   varname: "aa",
    //   value: this.data[0],
    //   updateddate: (new Date()).toISOString().substr(0, 10)
    // });
  }
  ngOnInit() {
    //     this.loader.loadAsRoot(DNA, this.elementRef, this._injector)
    // .then(compRef =>this.subject.subscribe(compRef.instance));
  }
  

}
