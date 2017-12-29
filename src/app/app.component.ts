import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCECyAO05Z_P1o2uLirZK4MssgzRt-WGfE",
      authDomain: "recipe-book-e062a.firebaseapp.com"
    });
  }

}
