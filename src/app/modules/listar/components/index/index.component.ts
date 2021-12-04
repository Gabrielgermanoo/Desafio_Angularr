import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
  @ViewChild('dTable', {static: false}) dataTable: any;

  constructor() { }
  ngAfterViewInit(): void {
    $(this.dataTable.nativeElement).DataTable();
  }

  ngOnInit(): void {
    
  }
}