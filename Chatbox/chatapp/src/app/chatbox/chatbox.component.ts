import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';

const SOCKET_ENDPOINT = 'localhost:3000';
@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  socket: any;
  constructor() { }

  ngOnInit(): void {
    this.setupSocketConection();
  }
  setupSocketConection(){
    this.socket = io(SOCKET_ENDPOINT);
  }
  sendMsg(){
    this.socket.emit('message', this.message);
    this.message = '';
  }
}
