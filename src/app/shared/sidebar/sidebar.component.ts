import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  menuItems: any[];

  constructor(private sideBarService: SidebarService) {
    this.menuItems = sideBarService.menu;

    console.log(this.menuItems);
  }
}
