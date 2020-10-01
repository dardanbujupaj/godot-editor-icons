import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs'

import {IconMetadata} from '../icon-metadata'
import {IconService} from '../icon.service'

@Component({
  selector: 'app-icon-browser',
  templateUrl: './icon-browser.component.html',
  styleUrls: ['./icon-browser.component.css']
})
export class IconBrowserComponent implements OnInit {
  icons: Observable<any[]>

  constructor(
    private iconService: IconService,
  ) { }

  ngOnInit(): void {
    this.icons = this.iconService.listAll()
    this.icons.subscribe(console.log)
  }

}
