import { Component, OnInit } from '@angular/core';

export class Produit{
  id: number;
  nom: string;
  prix: string;
  description: string;
}

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit{

  produits: Produit[] = []
  produit : Produit = new Produit()
  keyword: string = ""
  new: boolean = false;
  nom!: string; prix!: number;
  ngOnInit(): void {
    this.produits = [
      {id: 1, nom: 'Ordinateur', prix: '32000', description: 'Ordinateur portable marque dell, 500 GB de memoire' },
    ].sort((a, b) => b.id - a.id);
  }

  deleteProduit(p: any) {
    let index = this.produits.indexOf(p);
    if(index != -1){
      const result = window.confirm('Le produit sera supprimé !');
      if(result){
        this.produits.splice(index, 1)
      }
    }
    }

    editProduit(p: any){
      this.new = true;
      this.produit = p;
    }

    newProduct(){
      this.produit = new Produit();
      this.new = true
    }

    saveProduct(){
      if(this.produit.id){
        let updatP = this.produits.find(p => p.id == this.produit.id)
        if(updatP){
          updatP.nom = this.produit.nom;
          updatP.prix = this.produit.prix;
          updatP.description = this.produit.description;
        }
      }
      else{
        this.produit.id = this.produits.length + 1;
        this.produits.push(this.produit);
      }
      this.new = false
    }

    annuler(){
      this.new = false
    }

    search() {
      if(this.keyword){
        this.produits = this.produits.filter((item: { nom: string | string[]; }) => item.nom.includes(this.keyword))
      }
      }

}
