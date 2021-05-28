import { Tache } from "../model/tache";
import { getStorage, setStorage } from "./storage";

export class TacheService {
    public listTaches: Tache[] = [];

    async loadListTache() {
        const resultListTache = await getStorage("listTache");//On ajoute le mot clé await car getStorage met un peu de temps à s'executer
        if(resultListTache != null && Array.isArray(resultListTache)) this.listTaches = resultListTache;//On vérifie que resultListTache n'est pas null
        else this.listTaches = [];//Attention ! Le résultat de getStorage est null, donc on met un tableau vide
    }

    ajouterTache(_titre: string) {
        console.log("ajouter tache de Tache Service");
        this.listTaches.push(new Tache(_titre));
        this.sauvegarde();//On sauvegarde les listTaches
    }

    supprimerTache(index: number) {
        this.listTaches.splice(index, 1);//On supprime la tache
        this.sauvegarde();
    }

    getTache(index: number) {
        if(this.listTaches[index] != null){
            return this.listTaches[index];
        } else {
            return null;
        }
    }

    sauvegarde() {
        setStorage("listTache", this.listTaches);//On sauvegarde this.listTaches dans le mot clé "listTache"
    }

    setTacheImportant(index: number) {
        this.listTaches[index].important = !this.listTaches[index].important;
        this.sauvegarde();
    }

    getNombreDeTaches() {
        return this.listTaches.length;
    }
}