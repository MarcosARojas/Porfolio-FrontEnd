import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CabezeraComponent } from './componentes/cabezera/cabezera.component';
import { AcercaDeUserComponent } from './componentes/acerca-de-user/acerca-de-user.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { NavComponent } from './componentes/nav/nav.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ButtonFacebookComponent } from './componentes/botones/button-facebook/button-facebook.component';
import { ButtonInstagramComponent } from './componentes/botones/button-instagram/button-instagram.component';
import { ButtonLinkedinComponent } from './componentes/botones/button-linkedin/button-linkedin.component';
import { ButtonGithubComponent } from './componentes/botones/button-github/button-github.component';
import { EdicionExperienciaComponent } from './componentes/pantallas/edicion-experiencia/edicion-experiencia.component';
import { InicioUserComponent } from './componentes/pantallas/inicio-user/inicio-user.component';
import { EdicionEducacionComponent } from './componentes/pantallas/edicion-educacion/edicion-educacion.component';
import { CrearEducacionComponent } from './componentes/pantallas/crear-educacion/crear-educacion.component';
import { CrearExperienciaComponent } from './componentes/pantallas/crear-experiencia/crear-experiencia.component';
import { CrearProyectoComponent } from './componentes/pantallas/crear-proyecto/crear-proyecto.component';
import { EdicionProyectoComponent } from './componentes/pantallas/edicion-proyecto/edicion-proyecto.component';
import { CrearSkillComponent } from './componentes/pantallas/crear-skill/crear-skill.component';
import { EdicionSkillComponent } from './componentes/pantallas/edicion-skill/edicion-skill.component';
import { EdicionInfoUserComponent } from './componentes/pantallas/edicion-info-user/edicion-info-user.component';
import { HttpClien, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CabezeraComponent,
    AcercaDeUserComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    NavComponent,
    FooterComponent,
    ButtonFacebookComponent,
    ButtonInstagramComponent,
    ButtonLinkedinComponent,
    ButtonGithubComponent,
    EdicionExperienciaComponent,
    InicioUserComponent,
    EdicionEducacionComponent,
    CrearEducacionComponent,
    CrearExperienciaComponent,
    CrearProyectoComponent,
    EdicionProyectoComponent,
    CrearSkillComponent,
    EdicionSkillComponent,
    EdicionInfoUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
