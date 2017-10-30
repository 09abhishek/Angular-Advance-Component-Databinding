import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck, AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // None
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: String, name: String, content: String, val: number};
  @Input() name: String;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {
    console.log('Constructor of Server Component called');
    // console.log(this.header.nativeElement.textcontent);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges of Server Component called');
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInit of Server Component called');
    console.log('Text Content' + this.header.nativeElement.textcontent);
    console.log('Paragraph Text : ' + this.paragraph.nativeElement.textContent);
  }
  ngDoCheck() {
    console.log('ngDoCheck Invoked');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit Called');
    console.log('Paragraph Text : ' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit Called');
    console.log('Text Content' + this.header.nativeElement.textcontent);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy Called');
  }
}
