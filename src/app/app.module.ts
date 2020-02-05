import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExempleComponent } from './Components/exemple/exemple.component';
import { AfficheImagesComponent } from './Components/affiche-images/affiche-images.component';
import { TPComponent } from './tp/tp.component';
import { RotationComponent } from './rotation/rotation.component';
import {FormsModule} from '@angular/forms';
import { FilsComponent } from './Parent/fils/fils.component';
import { PereComponent } from './Parent/pere/pere.component';
import { CVComponent } from './CV/cv/cv.component';
import { ListeComponent } from './CV/liste/liste.component';
import { ItemComponent } from './CV/item/item.component';
import { DetailComponent } from './CV/detail/detail.component';



@NgModule({
  declarations: [
    AppComponent,
    ExempleComponent,
    AfficheImagesComponent,
    TPComponent,
    RotationComponent,
    FilsComponent,
    PereComponent,
    CVComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
