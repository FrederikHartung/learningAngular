import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 1234
    serverStatus: String = 'offline'
    serverName: String = ''

    getServerStatus () {
        return this.serverStatus
    }

    getServerName () {
        return this.serverName
    }

    constructor (serverName: String) {
        this.serverName = serverName
        this.serverStatus = 'offline'
    }
}