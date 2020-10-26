import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Components
import { HomeComponent } from "./components/home/home.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { DepartamentosComponent } from "./components/departamentos/departamentos.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { TresComponent } from "./components/tres/tres.component";

//Definir las rutas
const appRoutes: Routes = [
  //cuando la ruta esta vacía
  { path: "", component: HomeComponent },
  //cuando se pone el nombre del componente en la ruta
  { path: "departamentos", component: DepartamentosComponent },
  { path: "productos", component: TresComponent },
  { path: "contacto", component: ContactoComponent },

  //Cuando alguien pone cualquier ruta que no exisste
  { path: "**", component: HomeComponent } //siempre debe ir al final
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
