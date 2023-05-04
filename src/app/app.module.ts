import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './componentes/header/bar/bar.component';
import { LogoArgProgComponent } from './componentes/header/bar/logo-arg-prog/logo-arg-prog.component';
import { ContenedorSocialBarComponent } from './componentes/header/bar/contenedor-social-bar/contenedor-social-bar.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ImgBioComponent } from './componentes/header/img-bio/img-bio.component';


@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    LogoArgProgComponent,
    ContenedorSocialBarComponent,
    HeaderComponent,
    ImgBioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
