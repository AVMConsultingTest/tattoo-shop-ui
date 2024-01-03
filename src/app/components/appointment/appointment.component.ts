import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
  today : Date = new Date();
  selectedTab: any = 'userDetails';
  bookingDate: any;
  bookingDateSelected  = new Date().toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    weekday: 'short'
  });;
  redirect(item: any) {
    this.selectedTab = item;
  }
  public timeArray =     
    [ "06:00", "07:00", "08:00", "12:00", "13:00", "14:00","18:00", "19:00", "20:00"]
  selectDate() {
    this.bookingDateSelected = this.bookingDate.toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      weekday: 'short'
    });
    // this.redirect('barber');
	}
}
