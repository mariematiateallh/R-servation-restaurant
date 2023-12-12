import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceResService } from 'src/app/service-res.service';
import { Reservation } from '../modele/reservation';

@Component({
  selector: 'app-add-res-form',
  templateUrl: './add-res-form.component.html',
  styleUrls: ['./add-res-form.component.css']
})
export class AddResFormComponent {
  reservations: Reservation[] = [];
  reservation: any={} ;
  reservationSuccess = false;

  constructor(private serviceRes: ServiceResService) { }



  addres(form: NgForm) {

 if (form.valid) {
    const newres :Reservation= {
      id:0,
      reservationDate: form.value.reservationDate,
      customerName: form.value.customerName,
      timetables: form.value.timetables,
      customerEmail: form.value.customerEmail,
      numberOfGuests: form.value.numberOfGuests,
      customerPhone: form.value.customerPhone,
      furtherRequests: form.value.furtherRequests,
    };

    this.serviceRes.addReservation(newres).subscribe(
      (data) => {
        console.log(data);
        location.reload();
      }
    );

  }
  this.reservationSuccess = true;
  console.log(this.reservationSuccess); // Check in the console


  }
}
  

