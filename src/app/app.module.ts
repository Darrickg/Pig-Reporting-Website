import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { PigsComponent } from './components/pigs/pigs.component';
import { PigItemComponent } from './components/pig-item/pig-item.component';
import { MapComponent } from './components/map/map.component';
import { AddPigComponent } from './components/add-pig/add-pig.component';

const appRoutes: Routes = [
  {path: '', component: PigsComponent},
  {path: 'add', component: AddPigComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    PigsComponent,
    PigItemComponent,
    MapComponent,
    AddPigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
