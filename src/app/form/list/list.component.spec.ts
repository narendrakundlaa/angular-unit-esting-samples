import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { AlertComponent } from 'src/app/shared-components/alert/alert.component';
import { TableDataComponent } from 'src/app/shared-components/table-data/table-data.component';
import { HttpClientModule } from '@angular/common/http';


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, AlertComponent, TableDataComponent],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should close alert with isAlertSHow is false', async(() => {
    component.closeAlert();
    expect(component.isAlertSHow).toBeFalsy();
  }));
  it('it should deleted', () => {
    const data: any = [
      { id: 1, name: 'Narendra' }
    ];
    fixture.detectChanges();
    //let deleteRecordValue = component.deleteRecord(data.id);
    expect(component.isAlertSHow).toBeTruthy();

    expect(component.allItems.indexOf(data.id)).toContain(1);
  });
});
