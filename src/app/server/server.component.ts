// allow component to be instantiated with export and Spring like annotation (a decorator) 

import { Component } from '@angular/core';

@Component({
    // convention is to prefix wwith app-
    selector: 'app-server',
    templateUrl: './server.component.html',  // this can be replaced by inline HTML tag(s) instead of a reference to an HTML file;
                                            // use template instead of templateURL not both (similarly, styles can be run inline or from a CSS file)
    // custom CSS class online added by ngClass
    styles: [`
        .online {
            color: white; 
        }
        `]
})
export class ServerComponent {
    // type is implied and not strictly required
    serverId: number = 101;
    serverStatus: string = 'online';

    constructor(){
        // build a random number between 0 and 1, and then test with ternary
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}