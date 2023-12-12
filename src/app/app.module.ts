import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MenuComponent } from './menu/menu.component';
import { ListmenuComponent } from './listmenu/listmenu.component';

import { CommonModule } from '@angular/common';
import { ReservationModule } from './reservation/reservation.module';
import { ServiceResService } from './service-res.service';
import { HttpClientModule } from '@angular/common/http';
import { PlusmenuComponent } from './plusmenu/plusmenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutusComponent,
    MenuComponent,
    ListmenuComponent,
    PlusmenuComponent,
    DashboardComponent
   ],
   exports: [
    WelcomeComponent,
    AboutusComponent,
    ListmenuComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReservationModule,
    HttpClientModule,
  ],
  providers: [ServiceResService],
  bootstrap: [AppComponent]
})
export class AppModule { }
