import { Component, OnInit } from '@angular/core';
import { TacheService } from '../services/taches.service';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.page.html',
  styleUrls: ['./parametres.page.scss'],
})
export class ParametresPage implements OnInit {

  nombreTacheEnCour:number = 0;

  constructor(public tacheService: TacheService) { }

  ngOnInit() {
    //La page est lancée, on initialise le nombreDeTachesEnCour en allant chercher l'information dans tachesService 
    this.nombreTacheEnCour = this.tacheService.getNombreDeTaches();
  }

}
