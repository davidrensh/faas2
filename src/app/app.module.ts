// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule, ApplicationRef } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     CommonModule,
//     FormsModule
//   ],
//   providers: [],
//   entryComponents: [AppComponent],
//   bootstrap: [AppComponent]
// })
// export class AppModule {

// }
import * as firebase from 'firebase';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent ,DynamicContent} from './app.component';
import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = {
  apiKey: "AIzaSyDUKlFAFOci3eIKn84YGr4Z1A4fexfyfNg",
  authDomain: "formaas.firebaseapp.com",
  databaseURL: "https://formaas.firebaseio.com",
  storageBucket: "gs://firebase-formaas.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,DynamicContent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule, AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}

// import * as firebase from 'firebase';
// import { BrowserModule } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { enableProdMode, NgModule } from '@angular/core';
// import { AppComponent } from './app.component';
// import { AngularFireModule } from 'angularfire2';

// export const firebaseConfig = {
//   apiKey: "AIzaSyDUKlFAFOci3eIKn84YGr4Z1A4fexfyfNg",
//   authDomain: "formaas.firebaseapp.com",
//   databaseURL: "https://formaas.firebaseio.com",
//   storageBucket: "gs://firebase-formaas.appspot.com"
// };

// @NgModule({
//   imports: [
//     BrowserModule
//     , AngularFireModule.initializeApp(firebaseConfig)
//   ],
//   declarations: [AppComponent],
//   bootstrap: [ AppComponent ]
// })
  
// export class AppModule {}