export class Tache {
    titre: string = "";
    important: boolean = false;

    constructor(_titre: string) {
        this.titre = _titre;
        this.important = false;
    }
}
