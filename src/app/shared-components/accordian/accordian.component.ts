import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.panel-group').on('hidden.bs.collapse', this.toggleIcon);
    $('.panel-group').on('shown.bs.collapse', this.toggleIcon);

  }
  toggleIcon(e) {
    $(e.target)
      .prev('.panel-heading')
      .find(".short-full")
      .toggleClass(`glyphicon-plus glyphicon-minus`);
  }
}
