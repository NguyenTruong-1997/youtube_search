import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ytb-search',
  templateUrl: './ytb-search.component.html',
  styleUrls: ['./ytb-search.component.scss']
})
export class YtbSearchComponent implements OnInit {
  //#region Properties
  sda!: string;
  @Output() keyWord: EventEmitter<string> = new EventEmitter<string>();

  //#endregion

  //#region Constructor
  public constructor() {}

  //#endregion

  //#region Methods
  ngOnInit(): void {}

  search(event: any) {
    this.sda = event.target.value
  }

  submit() {
    this.keyWord.emit(this.sda);
  }

  //#endregion
}
