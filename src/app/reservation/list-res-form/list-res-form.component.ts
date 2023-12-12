import { Component, OnInit } from '@angular/core';
import { Reservation } from '../modele/reservation';
import { ServiceResService } from 'src/app/service-res.service';

@Component({
  selector: 'app-list-res-form',
  templateUrl: './list-res-form.component.html',
  styleUrls: ['./list-res-form.component.css']
})
export class ListResFormComponent implements OnInit {
  reservations: Reservation[] = [];
  selectedReservation: Reservation | null = null;


  constructor(private serviceRes: ServiceResService) { }

  ngOnInit(): void {
    this.loadReservations();
  }

  private loadReservations(): void {
    this.serviceRes.getReservations().subscribe(
      (reservations: Reservation[]) => {
        this.reservations = reservations;
     },
      error => {
        console.error('Error fetching reservations:', error);
      }
   );
  }
  deleteReservation(reservationId: number): void {
    this.serviceRes.deleteReservation(reservationId).subscribe(
      () => {
        // Supprimer la réservation de la liste locale
        this.reservations = this.reservations.filter(reservation => reservation.id !== reservationId);
      },
      error => {
        console.error('Erreur lors de la suppression de la réservation :', error);
      }
    );
  }

  editReservation(reservation: Reservation): void {
    this.selectedReservation = { ...reservation };
  }
  updateReservation(updatedReservation: Reservation): void {
    this.serviceRes.updateReservation(updatedReservation).subscribe(
      (reservations: Reservation[]) => {
        console.log('Réservation mise à jour avec succès :', reservations);
        this.selectedReservation = null;
        this.loadReservations();
      },
      error => {
        console.error('Erreur lors de la mise à jour de la réservation :', error);
      }
    );

  }
}






