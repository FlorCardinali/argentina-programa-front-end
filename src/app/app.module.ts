import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './componentes/header/bar/bar.component';
import { LogoArgProgComponent } from './componentes/header/bar/logo-arg-prog/logo-arg-prog.component';
import { ContenedorSocialBarComponent } from './componentes/header/bar/contenedor-social-bar/contenedor-social-bar.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ImgBioComponent } from './componentes/header/img-bio/img-bio.component';
import { PerfilComponent } from './componentes/header/perfil/perfil.component';
import { ImgPerfilComponent } from './componentes/header/perfil/img-perfil/img-perfil.component';
import { TextoPerfilComponent } from './componentes/header/perfil/texto-perfil/texto-perfil.component';
import { BodyComponent } from './componentes/body/body.component';
import { AcercaDeComponent } from './componentes/header/perfil/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/body/educacion/educacion.component';
import { SkillsComponent } from './componentes/body/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BotonesBarraComponent } from './componentes/header/bar/botones-barra/botones-barra.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    LogoArgProgComponent,
    ContenedorSocialBarComponent,
    HeaderComponent,
    ImgBioComponent,
    PerfilComponent,
    ImgPerfilComponent,
    TextoPerfilComponent,
    BodyComponent,
    AcercaDeComponent,
    EducacionComponent,
    SkillsComponent,
    BotonesBarraComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
