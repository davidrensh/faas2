import * as firebase from 'firebase';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { routing,
         appRoutingProviders }  from './myrouting/myrouting.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DynamicTemplate } from './dynamictemplate/dynamictemplate.component';

import { AngularFireModule } from 'angularfire2';
import { TempeditorComponent } from './tempeditor/tempeditor.component';

import { CKEditorModule } from 'ng2-ckeditor';
import { LoaderComponent } from './loader/loader.component';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { ApiComponent } from './api/api.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDUKlFAFOci3eIKn84YGr4Z1A4fexfyfNg",
  authDomain: "formaas.firebaseapp.com",
  databaseURL: "https://formaas.firebaseio.com",//dren1117@gmail.com
  storageBucket: "gs://firebase-formaas.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,DynamicTemplate, TempeditorComponent, LoaderComponent, ListComponent, ShowComponent, ApiComponent
  ],
  imports: [routing,
    BrowserModule,CKEditorModule,
    CommonModule,
    FormsModule, AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
