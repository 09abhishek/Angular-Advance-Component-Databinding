import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated =  new EventEmitter<{serverName: string, serverContent: string, serverVal: number}>();
  @Output('bluprintevent') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string, serverVal: number}>();
  // newServerName =  '';  (due to using of local reference)
  // newServerContent = '';
  newServerVal;
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }
  ngOnInit() {
  }
  onAddServer(localrefInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    console.log('Value Entered :' + localrefInput.value);
    this.serverCreated.emit({
      serverName: localrefInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
      serverVal: this.newServerVal
    });
  }
  onAddBlueprint (localrefInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: localrefInput.value,
      //   serverContent: this.newServerContent,
      serverContent: this.serverContentInput.nativeElement.value,
      serverVal: this.newServerVal
    });
  }
}
