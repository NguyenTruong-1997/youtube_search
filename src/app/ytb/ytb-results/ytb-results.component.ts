import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ytb-results',
  templateUrl: './ytb-results.component.html',
  styleUrls: ['./ytb-results.component.scss']
})
export class YtbResultsComponent implements OnInit {
  @Input() result: any;

  constructor() {}

  ngOnInit(): void {
    
  }
}
