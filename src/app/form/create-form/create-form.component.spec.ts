import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormComponent } from './create-form.component';
import { AlertComponent } from 'src/app/shared-components/alert/alert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from 'src/app/shared-components/input/input.component';


describe('CreateFormComponent', () => {
  let component: CreateFormComponent;
  let fixture: ComponentFixture<CreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CreateFormComponent, AlertComponent, InputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should submit with displayAlert is true', async(() => {
    component.onSubmit();
    expect(component.displayAlert).toBeTruthy();
  }));
  it('it should close alert with displayAlert is false', async(() => {
    component.closeAlert();
    expect(component.displayAlert).toBeFalsy();
  }));
});
