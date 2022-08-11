import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivsionComponent } from './divsion.component';

describe('DivsionComponent', () => {
  let component: DivsionComponent;
  let fixture: ComponentFixture<DivsionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivsionComponent ]
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
    component.calcForm.controls['input1'].setValue('');
    component.calcForm.controls['input1'].setValue('');
    expect(component.calcForm.valid).toBeFalsy();

    // update view, once the values are entered
    fixture.detectChanges();
}));
it('form should be valid', async(() => {
  component.calcForm.controls['input1'].setValue('24');
  component.calcForm.controls['input1'].setValue('12');
  expect(component.calcForm.valid).toBeTruthy();

  // update view, once the values are entered
  fixture.detectChanges();
}));
});
