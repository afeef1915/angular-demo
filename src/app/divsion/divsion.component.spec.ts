import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DivsionComponent } from './divsion.component';
import { ReactiveFormsModule } from '@angular/forms';
describe('DivsionComponent', () => {
  let component: DivsionComponent;
  let fixture: ComponentFixture<DivsionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [DivsionComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivsionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', async(() => {
    component.calcForm.get('input2').setValue('abc');
    component.calcForm.get('input2').setValue('abc');
    expect(component.calcForm.valid).toBeFalsy();
    fixture.detectChanges();
  }));
  it('form should be required', async(() => {
    component.calcForm.get('input1').setValue('');
    component.calcForm.get('input2').setValue('');
    expect(component.calcForm.valid).toBeFalsy();
    fixture.detectChanges();
  }));
  it('form should be valid', async(() => {
    component.calcForm.get('input1').setValue('24');
    component.calcForm.get('input2').setValue('12');
    expect(component.calcForm.valid).toBeTruthy();
    fixture.detectChanges();
  }));
});
