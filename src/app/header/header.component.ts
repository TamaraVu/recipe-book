import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  collapsed = false;

  navData = [
    {
      routerLink: 'home',
      materialIcon: 'home',
      label: 'Home',
    },
    {
      routerLink: 'home',
      materialIcon: 'groups',
      label: 'About us',
    },
    {
      routerLink: 'recipes',
      materialIcon: 'restaurant_menu',
      label: 'Recipes',
    },
    {
      routerLink: 'blog',
      materialIcon: 'library_books',
      label: 'Blog',
    },
    {
      routerLink: 'contact',
      materialIcon: 'call',
      label: 'Contact us',
    },
    {
      routerLink: 'edit',
      materialIcon: 'add_circle',
      label: 'Add Recipe',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  openSidenav() {
    this.collapsed = true;
  }

  closeSidenav() {
    this.collapsed = false;
  }
}
