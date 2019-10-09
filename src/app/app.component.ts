import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyCdkjTUV38zRuB4cYp-eQDfh-IAEWeCD2I",
      authDomain: "bookshelves-oc-tuto.firebaseapp.com",
      databaseURL: "https://bookshelves-oc-tuto.firebaseio.com",
      projectId: "bookshelves-oc-tuto",
      storageBucket: "bookshelves-oc-tuto.appspot.com",
      messagingSenderId: "692882087168",
      appId: "1:692882087168:web:50360df8ba6186b84de7e5",
      measurementId: "G-YC0VEWMSL2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
