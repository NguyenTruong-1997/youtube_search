import { YtbService } from './../services/ytb-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ytb',
  templateUrl: './ytb.component.html',
  styleUrls: ['./ytb.component.scss'],
})
export class YtbComponent implements OnInit {
  //#region Properties

  public listVideo: any;
  //#endregion

  //#region Constructor
  public constructor(public ytbService: YtbService) {}

  //#endregion

  //#region Methods
  ngOnInit(): void {}

  onGetdatas(keyWord: string) {
    this.ytbService.getDatas(keyWord).then((data) => {
      this.listVideo = data;
      console.log(data);
      
    });
  }
  //#endregion
}
