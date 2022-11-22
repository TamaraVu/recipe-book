import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  collapsed = false;

  navData = [
    {
      routerLink: 'home',
      materialIcon: 'home',
      label: 'Home',
    },
    {
      routerLink: 'about-us',
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
      label: 'Contact Us',
    },
    {
      routerLink: 'edit',
      materialIcon: 'add_circle',
      label: 'Add Recipe',
    },
    {
      routerLink: 'task-one',
      materialIcon: 'task',
      label: 'Task One',
    },
    {
      routerLink: 'task-two',
      materialIcon: 'task',
      label: 'Task Two',
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
