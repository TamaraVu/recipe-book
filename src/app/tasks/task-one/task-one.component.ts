import { Component, OnInit } from '@angular/core';

class Random {
  id: number;
  value: number;
}

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.scss'],
})
export class TaskOneComponent implements OnInit {
  values: Random[] = [];
  modified: Random[] = [];
  bool = false;
  mostOccurred = -1;
  constructor() {}

  ngOnInit(): void {
    this.getNext();
  }

  getNext() {
    this.randomArray();
    this.mostOccurred = this.sort();

    let i = this.mostOccurred;

    while (!this.bool) {
      i++;
      if (!this.values.some((v) => v.value == i)) {
        let newObj = {
          id: this.values.length + 1,
          value: i,
        } as Random;
        this.modified.push(newObj);
        this.bool = true;
      }
    }
  }

  randomArray() {
    this.mostOccurred = -1;
    this.bool = false;
    this.values = [];
    for (let index = 1; index <= 6; index++) {
      this.values.push({ id: index, value: Math.floor(Math.random() * 5) });
    }
    this.modified = [...this.values];
  }

  sort() {
    let value = -1;
    const sortedArray = this.modified.sort((a, b) => {
      return a.value - b.value;
    });
    sortedArray.forEach((v) => {
      const valueDuplicate = sortedArray.filter(
        (x) => x.value == v.value
      ).length;
      if (valueDuplicate > 1) {
        value = v.value;
      }
    });
    return value;
  }
}
