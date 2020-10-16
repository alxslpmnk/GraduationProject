import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  constructor() { }
  columnDefs = [
    {headerName: 'Название', field: 'name'},
    {headerName: '', field: 'lastmessage'}
];

rowData = [
    { name: 'Чат 1', lastmessage: 'хелло' },
    { name: 'Чат 2', lastmessage: 'пока' },
    { name: 'Чат 3', lastmessage: 'кекв'}
];
  ngOnInit(): void {
  }

}
