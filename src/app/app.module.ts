import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './componentes/header/bar/bar.component';
import { LogoArgProgComponent } from './componentes/header/logo-arg-prog/logo-arg-prog.component';
import { ContenedorSocialBarComponent } from './componentes/header/contenedor-social-bar/contenedor-social-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    LogoArgProgComponent,
    ContenedorSocialBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
