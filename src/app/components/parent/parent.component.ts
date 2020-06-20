import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  public messageToChild: string;
  totalcartval: any;
  dd: any;
  fromChild: any;
  // public user:string = getUserData;

  constructor(private service: MyserviceService) {
  }

  public getData(data) {
    setTimeout(() => {
      this.updateMessage(data);
    }, 1);
  }

  public parentData(data) {
    this.fromChild = data;
  }

  public updateMessage(data) {
    this.totalcartval = data
  }

  public sendMessage() {
    this.service.setName('KING KONG');
  }

  ngOnInit(): void {
    this.sendMessage();
    this.messageToChild = 'How are you?';
  }
}
