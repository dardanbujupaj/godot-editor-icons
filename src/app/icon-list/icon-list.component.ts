import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.css']
})
export class IconListComponent implements OnInit {

  @Input() icons

  size = 16

  constructor() { }

  ngOnInit(): void {
  }

}
