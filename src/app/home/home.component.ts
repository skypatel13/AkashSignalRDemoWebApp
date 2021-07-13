import { Component, OnInit } from '@angular/core';
import { HubConnection } from '@microsoft/signalr';
import * as signalR from '@microsoft/signalr'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private hubConnection: HubConnection;
  constructor() { }

  ngOnInit() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:44371/loopy')
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.hubConnection.start().catch(err => console.error(err.toString()));

    this.hubConnection.on('serverTime', (data) => {
      console.log(data);
    });
    this.hubConnection.on('SendMessage', (data) => {
      console.log(data);
    });
    this.hubConnection.on('Receive', (data) => {
      console.log(data);
    });
    this.hubConnection.on('SendMessageToSpecificID', (data) => {
      console.log(data);
    });
  }

}
