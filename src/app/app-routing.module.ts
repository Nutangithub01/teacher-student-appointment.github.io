import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'calendar', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
  { path: 'teachers', component: DoctorsComponent },
  { path: 'teacher-details/:id', component: DoctorDetailsComponent },
  { path: 'students', component: PatientsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
