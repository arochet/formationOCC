import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  titre: string = "Formation OCC";
  listTaches: string[] = ["Ranger ma chambre", "tache 2", "tache 3", "tache 4"];//List de mes taches


  constructor() {
  }

  ngOnInit() {
  }

  ajouterTache() {
    //Ajout d'un nouvelle élément dans le tableau listTaches
    this.listTaches.push("Nouvelle Tache " + (this.listTaches.length + 1));
  }
}
