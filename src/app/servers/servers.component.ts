import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverName = '';
  serverCreationStatus = 'No server was created!';
  serverWasCreated = false;
  servers = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Created server: ' + this.serverName;
    this.serverWasCreated = true;
    this.servers.push({serverName: this.serverName});
    console.log('Server was created');
    setTimeout(() => {
      this.serverWasCreated = false;
    }, 3000);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
