import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tache-view',
  templateUrl: './tache-view.page.html',
  styleUrls: ['./tache-view.page.scss'],
})
export class TacheViewPage implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    console.log("Id de l'url " + this.route.snapshot.params["id"]);
  }

}
