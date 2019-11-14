import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginationService } from './pagination.service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
