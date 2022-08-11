import { Component, createPlatform, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Subscription, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-divsion',
  templateUrl: './divsion.component.html',
  styleUrls: ['./divsion.component.scss']
})
export class DivsionComponent implements OnInit, OnDestroy {
  calcForm: FormGroup;
  quotient: any;
  submitted = false;
  sub1: Subscription;
  input1: number = 0;
  input2: number = 0;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();

  }
  createForm() {
    this.calcForm = this.fb.group({
      input1: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
      input2: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
    });
  }

  keyup(event: any) {
    if (event.target.value) {
      this.sub1 = merge(
        this.calcForm.get('input1').valueChanges,
        this.calcForm.get('input2').valueChanges
      ).pipe(debounceTime(500))
      .subscribe((res: any) => {
        this.calculateResult();
      });
    }
  }

  get f() {
    return this.calcForm.controls;
  }

  calculateResult() {
    let input1 = this.calcForm.get('input1').value;
    let input2 = this.calcForm.get('input2').value;
    if (input1 && input2) {
      this.quotient = Math.trunc(input1 / input2);
    }

  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
