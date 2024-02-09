import { Component, Input } from "@angular/core";

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
    serverStatus: String
    @Input() serverName: String

    constructor () {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'

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

        setTimeout(() => {
            this.checkServerStatus()
        }, Math.random() * 9000 + 1000)
    }
}