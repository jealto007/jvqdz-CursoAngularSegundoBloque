import { Component, OnInit } from "@angular/core";

@Component({
  selector: "contactoComponent", //nombre con el que hare referencia a este componente en el html
  templateUrl: "./contacto.component.html"
})
export class ContactoComponent implements OnInit {
  public titulo: string;
  constructor() {
    this.titulo = "Página de Contacto";
  }

  //Hook es un evento que sucede en alguna parte del ciclo de vida del componente
  ngOnInit() {
    //Bloque de instrucciones
  }
}
