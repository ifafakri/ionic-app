import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})

export class ContactsService {

  dbObj: SQLiteObject;
  readonly nomBD: string = 'voyage.db';
  readonly nomTable: string = 'contact';

  constructor(private sqlite: SQLite) {
  }
  
//creation de la base de données
  creerBD() {
    this.sqlite.create({
    name: this.nomBD,
    location: 'default'
    })
    .then((db: SQLiteObject) => {
    this.dbObj = db;
    console.log('Base de données créée!');
    })
    .catch(e => {
    alert('erreur ' + JSON.stringify(e));
  });
}

//creation dune table 
creerTable() {
  this.dbObj.executeSql(`
 CREATE TABLE IF NOT EXISTS ${this.nomTable} (id INTEGER PRIMARY KEY, nom
 varchar(255), tel INTEGER)
 `, [])
  .then(() => {
  console.log('Table Créée!');
  })
  .catch(e => {
  alert('erreur ' + JSON.stringify(e));
  });
 }

 //insertion dun contact
 insererContact(nom : string, tel : number) {
  return this.dbObj.executeSql(`INSERT INTO ${this.nomTable} (nom, tel) VALUES ('${nom}', '${tel}')
  `, []) ;
  }

  //afficher les contacts
  getContacts() {
    return this.dbObj.executeSql(`SELECT * FROM ${this.nomTable}`, []) ;
   }

   //supprimer un contact
   supprimerContact(c: any) {
    return this.dbObj.executeSql(`
   DELETE FROM ${this.nomTable} WHERE id = ${c.id}`, []) ;
   }

   //modifier un contact
   modifierContact(c: any, nom: string, tel: number) {
    return this.dbObj.executeSql(`UPDATE ${this.nomTable}
    SET nom = '${nom}', tel = '${tel}'
    WHERE id = ${c.id}`, []) ;
   }

}
