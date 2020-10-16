import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requestform',
  templateUrl: './requestform.component.html',
  styleUrls: ['./requestform.component.scss']
})
export class RequestformComponent implements OnInit {

  constructor() { }
  columnDefs = [
    {headerName: 'Номер', field: 'id'},
    {headerName: 'Название', field: 'title', sortable: 'true' },
    {headerName: 'Дата подачи', field: 'date', sortable: 'true'},
    {headerName: 'Статус', field: 'status', sortable: 'true'}
];

rowData = [
    { id: '1', title: 'Новое оборудование', date: Date.now(), status: 'В обработке' },
    { id: '2', title: 'Проблемы с интернетом', date: Date.now(), status: 'В обработке' }
];
  ngOnInit(): void {
  }

}
