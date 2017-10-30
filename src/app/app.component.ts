import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Test Server', content: 'Demo test server!', val: 1 }];

  onServerAdded(serverData: {serverName: string, serverContent: string, serverVal: number}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
      val: serverData.serverVal
    });
  }
  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string, serverVal: number}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
      val: blueprintData.serverVal
    });
  }
  onChangeFirst() {
    console.log('OnChange Called');
    this.serverElements[0].name = 'Changed Name';
  }
  onDestroyFirst() {
    console.log('On Destroy Called');
    this.serverElements.splice(0 , 1);
  }
}
