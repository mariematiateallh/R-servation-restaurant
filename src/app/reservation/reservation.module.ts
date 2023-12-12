import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReservationComponent } from './reservation/reservation.component';
import { AddResFormComponent } from './add-res-form/add-res-form.component';
import { EditResFormComponent } from './edit-res-form/edit-res-form.component';
import { ListResFormComponent } from './list-res-form/list-res-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservationRoutingModule } from './reservation-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ReservationComponent,
    AddResFormComponent,
    EditResFormComponent,
    ListResFormComponent
    ],
    exports:[
        ReservationComponent,AddResFormComponent,ListResFormComponent
    ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReservationRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [ReservationComponent]
})
export class ReservationModule { }
