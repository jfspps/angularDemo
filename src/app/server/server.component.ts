// allow component to be instantiated with export and Spring like annotation (a decorator) 

import { Component } from '@angular/core';

@Component({
    // convention is to prefix wwith app-
    selector: 'app-server',
    templateUrl: './server.component.html'  // this can be replaced by inline HTML tag(s) instead of a reference to an HTML file;
                                            // use template instead of templateURL not both (similarly, styles can be run inline or from a CSS file)
})
export class ServerComponent {

}