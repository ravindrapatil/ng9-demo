import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() message: string;
  @Output() public getUserData = new EventEmitter<string>();

  @Output() public toParent = new EventEmitter<string>();

  private myService;
  public myName: string;

  public test = this.message;

  constructor(service: MyserviceService) {
    this.myService = service;
  }

  doAction() {
    this.toParent.emit("Ravindra")
  }

  ngOnInit(): void {
    this.myName = this.myService.getName();
    this.getUserData.emit('welcome to stackoverflow!');
  }
}
