import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { PaginationService } from 'src/app/shared-components/pagination/pagination.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  /** employee info */
  employeeTitle: string = 'HCL Tech..';
  employeeHeaders: string[];
  employeeDetails: any[];
  employeeDetails2: any[];

  /** student info */
  studentTitle: string = 'Student Data';
  studentHeaders: string[];
  studentData: any[];
  data: any[] = [];

  /** alert message variable */
  alertMessage: string;
  alertType: string;
  isAlertSHow: boolean = false;
  constructor(private crudService: CrudService, private pagerService: PaginationService) { }

  // array of all items to be paged
  allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  // pagedItems: any[];

  ngOnInit() {
    /** employee info */
    this.employeeHeaders = ['id', 'name', 'designation', 'salary'];

    /** student info */
    this.studentHeaders = ['id', 'salary', 'dob', 'designation',];

    this.crudService.getEmployees().subscribe(empList => {
      this.allItems = empList;
      // this.studentData = empList;
      this.setPage(1);
    });

  }

  deleteRecord(id: number) {
    const index: number = this.employeeDetails.indexOf(id);
    const len = this.employeeDetails.length;

    if (len <= 1) {
      this.isAlertSHow = true;
      this.alertMessage = 'Table can not be empty';
      this.alertType = 'danger';
      return;
    }
    if (index !== -1) {
      this.employeeDetails.splice(index, 1);
    }
  }
  closeAlert() {
    this.isAlertSHow = false;
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.employeeDetails = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
