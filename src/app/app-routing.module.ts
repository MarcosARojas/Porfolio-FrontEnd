import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { EdicionExperienciaComponent } from "./componentes/pantallas/edicion-experiencia/edicion-experiencia.component";



const routes: Routes = [
    { path: '', component: AppComponent },
    { path: '', component: AppComponent },
    { path: 'editExpe/:id', component: EdicionExperienciaComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouingModule {}
