import { Component, OnInit, Input} from '@angular/core';

import {IconMetadata} from '../icon-metadata'

@Component({
  selector: 'app-icon-image',
  templateUrl: './icon-image.component.html',
  styleUrls: ['./icon-image.component.css']
})
export class IconImageComponent implements OnInit {

  @Input() icon: IconMetadata

  @Input() size = 16

  constructor() { }

  ngOnInit(): void {
  }

}
