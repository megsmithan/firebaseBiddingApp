import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Item} from "../item.model";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: Observable<Item>;

  constructor(private firestore: AngularFirestore, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
       const itemId = params['id'];
       this.item = this.firestore.doc<Item>(`items/${itemId}`).valueChanges();
    });
  }

}
