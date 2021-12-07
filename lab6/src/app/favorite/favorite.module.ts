import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteRoutingModule } from './favorite-routing.module';
import {FavoriteComponent} from "./favorite.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [FavoriteComponent],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class FavoriteModule { }
