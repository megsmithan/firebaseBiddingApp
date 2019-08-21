import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Item} from "./item.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: Observable<Item[]>;

  constructor (private firestore: AngularFirestore) {

  }

  ngOnInit(): void {
    // this.items.subscribe(items => {
    //   //this will be called for every items change
    // })
    this.items = this.firestore.collection<Item>('items').valueChanges();
  }

}
