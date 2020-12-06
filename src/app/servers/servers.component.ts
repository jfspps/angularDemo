import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  inputText = 'Enter some text above';
  someString = 'Note how the text is already preset here';
  serverName = 'Test Server';
  servers = ['Test server', 'Test server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server initiated';
    this.servers.push(this.serverName);
  }

  onTypeText(event: Event){
    // event is passed to a HTML element, where the event occurred, target, as its value property
    console.log(event);

    // casting required
    this.inputText = (<HTMLInputElement>event.target).value;
  }
}
