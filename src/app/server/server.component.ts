import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [
        `
        .online {
            color: white;
        }
        `
    ]
})
export class ServerComponent {
    serverId: number
    serverStatus: String

    constructor () {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
        this.serverId = Math.floor(Math.random() * 100)

        setTimeout(() => {
            this.checkServerStatus()
        }, 3000)
    }

    getServerStatus () {
        return this.serverStatus
    }

    getColor () {
        return this.serverStatus === 'online' ? 'green' : 'red'
    }

    checkServerStatus () {
        if(Math.random() > 0.5) {
            this.serverStatus = 'online'
        } else {
            this.serverStatus = 'offline'
        }
        //test

        setTimeout(() => {
            this.checkServerStatus()
        }, 3000)
    }
}