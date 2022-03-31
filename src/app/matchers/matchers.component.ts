import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matchers',
  templateUrl: './matchers.component.html',
  styleUrls: ['./matchers.component.scss']
})
export class MatchersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  compileAndroidCode() {
    throw new Error('you are using Old Angular');
  }

}
