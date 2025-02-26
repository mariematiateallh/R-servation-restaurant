import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlusmenuComponent } from './plusmenu/plusmenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListResFormComponent } from './reservation/list-res-form/list-res-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },

  {path :"detailsMenu",component :PlusmenuComponent},

  {path :"afficheliste",component :ListResFormComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
