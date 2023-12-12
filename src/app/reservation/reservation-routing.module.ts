// reservation-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResFormComponent } from './add-res-form/add-res-form.component';
import { ListResFormComponent } from './list-res-form/list-res-form.component';
import { ReservationComponent } from './reservation/reservation.component';

const reservationRoutes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(reservationRoutes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
