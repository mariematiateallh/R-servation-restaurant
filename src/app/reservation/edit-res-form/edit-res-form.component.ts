import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Reservation } from '../modele/reservation';

@Component({
  selector: 'app-edit-res-form',
  templateUrl: './edit-res-form.component.html',
  styleUrls: ['./edit-res-form.component.css']
})
export class EditResFormComponent {

  @Input() reservation: any;
  @Output() updateReservation = new EventEmitter<Reservation>();


  submitUpdateForm(): void {
    this.updateReservation.emit(this.reservation);

  }

}
