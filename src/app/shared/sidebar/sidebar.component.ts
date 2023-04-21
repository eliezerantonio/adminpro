import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  menuItems: any[];
  public user: User;

  constructor(
    private sideBarService: SidebarService,
    userService: UserService
  ) {
    this.menuItems = sideBarService.menu;
    this.user = userService.user;

    console.log(this.menuItems);
  }
}
