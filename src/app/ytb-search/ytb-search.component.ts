import { YtbServiceService } from './../services/ytb-service.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ytb-search',
  templateUrl: './ytb-search.component.html',
  styleUrls: ['./ytb-search.component.scss']
})
export class YtbSearchComponent implements OnInit {
  keyWord!: string

  constructor(private ytbService: YtbServiceService) { }

  ngOnInit(): void { }

  search(event: any) {
    this.keyWord = event.target.value;
  }

  submit(keyword: string) {
    this.ytbService.getDatas(keyword);
  }

}
