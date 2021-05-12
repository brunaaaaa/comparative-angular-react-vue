import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css'],
})
export class MyformComponent {
  height: number;
  weight: number;
  result: number;
  calculate() {
    this.result = parseFloat((this.weight / this.height ** 2).toFixed(2));
  }
}
