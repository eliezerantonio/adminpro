import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  public linkTheme = document.querySelector('#theme');
  public links!: NodeListOf<Element>;

  constructor() {}

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.chekCurrentTheme();
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.chekCurrentTheme();
  }

  chekCurrentTheme() {
    this.links.forEach((element) => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');

      const btnThemeUrrl = `./assets/css/colors/${btnTheme}.css`;

      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrrl === currentTheme) {
        element.classList.add('working');
      }
    });
  }
}
