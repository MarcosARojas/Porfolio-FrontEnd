import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { EdicionEducacionComponent } from "./componentes/pantallas/edicion-educacion/edicion-educacion.component";
import { EdicionExperienciaComponent } from "./componentes/pantallas/edicion-experiencia/edicion-experiencia.component";



const routes: Routes = [
    { path: '', component: AppComponent },
    { path: '', component: AppComponent },
    { path: 'editExpe/:id', component: EdicionExperienciaComponent },
    { path: 'editarEdu/:id', component: EdicionEducacionComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouingModule {}
