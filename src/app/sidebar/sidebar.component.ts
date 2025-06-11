import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Sidebar, SidebarCategory, SidebarMenu } from '../models/Sidebar';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  username: string = "Tim Hortons";

  selectedHeaderId: number = 1;
  selectedMenuId: number = 9;

  mainHeaders = [
    { id: 1, icon: 'fa-plus-circle', label: 'Create' },
    { id: 2, icon: 'fa-home', label: 'Home' },
    { id: 3, icon: 'fa-folder', label: 'Projects' },
    { id: 4, icon: 'fa-clone', label: 'Templates' },
    { id: 5, icon: 'fa-delicious', label: 'Brands' },
    { id: 6, icon: 'fa-star', label: 'Canva AI' },
    { id: 7, icon: 'fa-th-large', label: 'Apps' },
    { id: 8, icon: 'fa-file-excel-o', label: 'Approvals' },
  ];

  sidebar: Sidebar = new Sidebar([
    new SidebarCategory({
      title: 'Personal account',
      menus: [
        new SidebarMenu({ id: 1, label: 'Your profile', route: '/profile', icon: 'fa-user' }),
        new SidebarMenu({ id: 2, label: 'Login', route: '/login', icon: 'fa-sign-in' }),
        new SidebarMenu({ id: 3, label: 'Accessibility', route: '/accessibility', icon: 'fa-universal-access' }),
        new SidebarMenu({ id: 4, label: 'Message preferences', route: '/preferences', icon: 'fa-envelope' }),
        new SidebarMenu({ id: 5, label: 'Personal privacy', route: '/privacy', icon: 'fa-shield' }),
        new SidebarMenu({ id: 6, label: 'Your teams', route: '/teams', icon: 'fa-users' }),
      ]
    }),
    new SidebarCategory({
      title: 'People management',
      menus: [new SidebarMenu({ id: 7, label: 'Invite people', route: '/invite-people', icon: 'fa-user-plus' })]
    }),
    new SidebarCategory({
      title: 'Payments and plans',
      menus: [
        new SidebarMenu({ id: 8, label: 'Billing', route: '/billing', icon: 'fa-credit-card' }),
        new SidebarMenu({ id: 9, label: 'Orders and invoices', route: '/invoices', icon: 'fa-shopping-cart' }),
      ]
    }),
    new SidebarCategory({
      title: 'Reporting',
      menus: [new SidebarMenu({ id: 10, label: 'Usage report', route: '/usage-report', icon: 'fa-bar-chart' })]
    }),
    new SidebarCategory({
      title: 'Domains',
      menus: [new SidebarMenu({ id: 11, label: 'Web domains', route: '/web-domains', icon: 'fa-globe' })]
    }),
  ]);

  onHeaderClick(id: number): void {
    this.selectedHeaderId = id;
  }


  onMenuClick(id: any): void {
    this.selectedMenuId = id;
  }

}
