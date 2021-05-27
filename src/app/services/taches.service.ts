export class TacheService {
    public listTaches: string[] = ["Tache1", "Tache2"];

    ajouterTache(titre: string) {
        console.log("ajouter tache de Tache Service");
        this.listTaches.push(titre);
    }

    supprimerTache(index: number) {
        this.listTaches.splice(index, 1);
    }
}