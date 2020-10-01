import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms'

import {Observable, of} from 'rxjs'
import {combineLatest, startWith, switchMap, tap} from 'rxjs/operators'

import {IconMetadata} from '../icon-metadata'

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.css']
})
export class IconListComponent implements OnInit {

  @Input() icons: Observable<IconMetadata[]>
  filteredIcons: Observable<IconMetadata[]>


  searchText = new FormControl('')

  size = 32

  constructor() { }

  ngOnInit(): void {
    this.filteredIcons = this.icons.pipe(
      // use latest icons and latest searchText (or emptyString if no searchText available)
      combineLatest(
        this.searchText
              .valueChanges
              .pipe(startWith(''))
      ),

      switchMap(([icons, searchText]) => {
        const searchTextLower = searchText.toLowerCase()
        const filtered = icons.filter(icon => icon.name.toLowerCase().includes(searchTextLower))
        return of(filtered)
      }),
    )
  }

}
