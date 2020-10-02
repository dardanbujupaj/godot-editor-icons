import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms'

import {Subject, Observable, of, merge} from 'rxjs'
import {combineLatest, startWith, switchMap, tap, debounceTime, shareReplay} from 'rxjs/operators'

import {IconMetadata} from '../icon-metadata'
import {SettingsService} from '../settings.service'


const SIZE_KEY = 'iconSize'

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.css']
})
export class IconListComponent implements OnInit {

  @Input() icons: Observable<IconMetadata[]>
  filteredIcons: Observable<IconMetadata[]>


  searchText = new FormControl('')

  sizeSubject = new Subject<number>()
  size: Observable<number>

  constructor(
    private settingsService: SettingsService,
  ) {
    this.size = merge(
      this.sizeSubject.asObservable(),
      settingsService.item$(SIZE_KEY, 20),
    ).pipe(
      shareReplay(),
    )
      
    this.sizeSubject.pipe(
      debounceTime(500),
      tap(value => settingsService.setItem(SIZE_KEY, value)),
    ).subscribe()
  }


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
