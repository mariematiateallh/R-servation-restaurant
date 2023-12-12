import { Component } from '@angular/core';

@Component({
  selector: 'app-listmenu',
  templateUrl: './listmenu.component.html',
  styleUrls: ['./listmenu.component.css']
})
export class ListmenuComponent {
  menus = [
    {
      id: 1,
      namemenu: 'Spaghetti al Pomodoro Fresco e Basilico',
      plat1: 'Minestrone Toscano',
      plat2: 'Insalata di Pollo e Riso',
      plat3: 'Polpette di Pollo all',
      plat4: 'Purè di Patate all',
      image: 'assets/images/spaghetti-con-pomodorini.jpg'
    },
    {
      id: 2,
      namemenu: 'Bruschetta Pomodoro e Basilico',
      plat1: 'Risotto ai Frutti di Mare',
      plat2: 'Saltimbocca alla Romana',
      plat3: 'Bruschetta Pomodoro e Basilico',
      plat4: 'Insalata Caprese',
      image: 'assets/images/plat2.jpeg'
    },
    {
      id: 3,
      namemenu: 'Arancini al Ragù',
      plat1: 'Gnocchi alla Sorrentina',
      plat2: 'Involtini di Pollo alla Siciliana',
      plat3: 'Arancini al Ragù',
      plat4: 'Insalata Mista',
      image: 'assets/images/plat3.jpg'
    }
    // ... Ajoute d'autres menus si nécessaire
  ];

}
