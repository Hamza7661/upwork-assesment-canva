import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
@Component({
  selector: 'app-root',
  imports: [SidebarComponent, OrdersComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Canva-Replica';
}
