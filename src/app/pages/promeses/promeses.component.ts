import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promeses',
  templateUrl: './promeses.component.html',
  styles: [],
})
export class PromesesComponent implements OnInit {
  ngOnInit(): void {
    this.getUsers().then((users) => {
      console.log(users);
    });
    // const promese = new Promise((resolve, reject) => {
    //   if (true) {
    //     resolve('Hello world');
    //   } else {
    //     reject('Deu ruim');
    //   }
    // });
    // promese
    //   .then((message) => {
    //     console.log(message);
    //   })
    //   .catch((error) => console.log('Error na minha promessa', error));
    // console.log('fim de init');
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users').then((response) => {
        response.json().then((body) => console.log(body.data));
      });
    });
  }
}
