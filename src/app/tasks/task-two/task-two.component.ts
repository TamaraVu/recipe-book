import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface User extends Record<string, any> {
  firstName: string;
  lastName: string;
  age: number;
  address: {
    street: string;
    number: number;
    city: string;
  };
}

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.scss'],
})
export class TaskTwoComponent implements OnInit {
  user: User = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    address: {
      street: 'Street',
      number: 20,
      city: 'New York',
    },
  };

  lookupObject: {};

  pathControl = new FormGroup({
    path: new FormControl(null),
  });

  get path() {
    return this.pathControl.get('path') as FormControl;
  }

  constructor() {}

  ngOnInit(): void {}

  lookup() {
    let path = this.path?.value.split('.');
    let object: User = this.user;

    path.forEach((element: any) => {
      console.log(object[element]);
      if (object[element] == undefined) {
        this.lookupObject = 'Bad path';
        return;
      } else {
        object = object[element];
        this.lookupObject = object;
      }
    });
  }
}
