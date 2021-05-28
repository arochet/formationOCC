import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from '../model/tache';
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
    this.router.navigate(['parametres']);//On modifie l'url -> localhost:8100/parametres
  }

  //Cette fonction est appelé pour modifier l'état d'un tache. Important ou Non.
  setImportant(index: number) {
    this.tacheService.setTacheImportant(index);
  }

}
