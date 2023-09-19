import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerComponent } from './her/her.component';
import { ListComponent } from './list/list.component';




@NgModule({
  exports: [
     HerComponent,
    ListComponent,],
  declarations: [
    HerComponent,
    ListComponent,
  ],
imports:[
  CommonModule
]
})
export class HeroesModule { }
