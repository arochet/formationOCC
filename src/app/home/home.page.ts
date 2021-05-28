import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TacheService } from '../services/taches.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  titre: string = "Formation OCC";
  valueChampNouvelleTache: string = "";//Valeur entré par l'utilisateur dans l'ion-input

  constructor(
    public tacheService: TacheService,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.tacheService.loadListTache();
  }

  ajouterTache() {
    if (this.valueChampNouvelleTache != "") {
      //Ajout d'un nouvelle élément dans le tableau listTaches
      this.tacheService.ajouterTache(this.valueChampNouvelleTache);
      this.valueChampNouvelleTache = "";
    } else {
      console.error("Attention vous ajoutez une tache vide !");
    }
  }

  supprimerTache(i: number) {
    this.tacheService.supprimerTache(i);
  }

  ouvrirPageParametres() {
    this.router.navigate(['parametres']);
  }

  setImportant(index: number) {
    console.log("Afficher la tache " + this.tacheService.getTache(index).titre);
    var estImportant = this.tacheService.getTache(index).important;
    this.tacheService.getTache(index).important = !estImportant;
  }

}
