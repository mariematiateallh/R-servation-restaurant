import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from './reservation/modele/reservation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceResService {


  constructor(private http: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>('http://localhost:3000/reservations');
  }

  addReservation(newres: Reservation): Observable<Reservation[]> {

    const uniqueId =this.generateUniqueId();
    const newreserve={...newres,id:uniqueId}
    return this.http.post<Reservation[]>('http://localhost:3000/reservations', newreserve);
}
generateUniqueId(): number {

  return new Date().getTime() ;
   }


deleteReservation(reservationId: number): Observable<Reservation[]> {
  return this.http.delete<Reservation[]>(`http://localhost:3000/reservations/${reservationId}`);
}

updateReservation(updatedReservation: Reservation): Observable<Reservation[]> {
  const url = `http://localhost:3000/reservations/${updatedReservation.id}`;
  return this.http.put<Reservation[]>(url, updatedReservation);
}

}
