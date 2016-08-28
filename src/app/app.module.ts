import * as firebase from 'firebase';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DynamicTemplate } from './dynamictemplate/dynamictemplate.component';

import { AngularFireModule } from 'angularfire2';
import { TempeditorComponent } from './tempeditor/tempeditor.component';


export const firebaseConfig = {
  apiKey: "AIzaSyDUKlFAFOci3eIKn84YGr4Z1A4fexfyfNg",
  authDomain: "formaas.firebaseapp.com",
  databaseURL: "https://formaas.firebaseio.com",
  storageBucket: "gs://firebase-formaas.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,DynamicTemplate, TempeditorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule, AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  entryComponents: [TempeditorComponent],
  bootstrap: [TempeditorComponent]
})
export class AppModule {

}
