import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secutiry',
  templateUrl: './secutiry.component.html',
  styleUrls: ['./secutiry.component.css']
})
export class SecutiryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
