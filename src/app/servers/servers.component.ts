import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',//This is the most used selector
  //selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test Server';
  
  constructor() { 
    setTimeout(() => {
        this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'A server was created!';;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
