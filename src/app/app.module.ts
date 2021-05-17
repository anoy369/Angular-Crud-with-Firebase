import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  firebaseConfig = {
    apiKey: "AIzaSyCRYg4j-PyXgOZZIAlP0vP0H8zvVHGekT0",
    authDomain: "practices-ade9d.firebaseapp.com",
    projectId: "practices-ade9d",
    storageBucket: "practices-ade9d.appspot.com",
    messagingSenderId: "977516525465",
    appId: "1:977516525465:web:0c89630a30d3d3b652c508",
    measurementId: "G-XK4L1V88LX"
  };

}
