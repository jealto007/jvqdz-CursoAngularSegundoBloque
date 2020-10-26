import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "departamentosComponent", //nombre con el que hare referencia a este componente en el html
  templateUrl: "./departamentos.component.html"
})
export class DepartamentosComponent implements OnInit {
  public titulo: string;
  constructor(private _http: HttpClient) {
    this.titulo = "Departamentos";
    _http.get("http://jsonplaceholder.typicode.com/users").subscribe(
      (data) => {
        console.log(data);
      }, //cuando la peticion me devuelve algo
      (err) => {
        console.log(err);
      }, //cuando la peticion me regresa un error
      () => {
        console.log("Peticion finalizo");
      } //cuando se termina de ejecutar
    ); //subscribe para que se ejecute
  }

  //Hook es un evento que sucede en alguna parte del ciclo de vida del componente
  ngOnInit() {
    //Bloque de instrucciones
  }
}
