import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './componentes/header/bar/bar.component';
import { LgoArgProgComponent } from './componentes/header/lgo-arg-prog/lgo-arg-prog.component';


@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    LgoArgProgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
