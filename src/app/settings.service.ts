import { Injectable } from '@angular/core';

import {Observable, fromEvent} from 'rxjs'
import {map, filter, startWith} from 'rxjs/operators'

const PREFIX = 'godot-editor-icons.settings.'

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private itemUpdates$ = fromEvent<StorageEvent>(window, 'storage').pipe(
    filter(({key}) => key.startsWith(PREFIX)),
    map(({key, newValue}) => {
      const value = JSON.parse(newValue);

      return [key, value];
    })
  )

  constructor() { }

  setItem(key: string, value: any) {
    localStorage.setItem(PREFIX + key, JSON.stringify(value))
  }

  getItem(key: string, defaultValue: any = null) {
    const storageValue = localStorage.getItem(PREFIX + key);

    if (storageValue === null) {
      return defaultValue
    } else {
      return JSON.parse(storageValue)
    }
  }

  item$(key: string, defaultValue: any = null) {
    return this.itemUpdates$.pipe(
      filter(([itemKey, value]) => key === itemKey),
      map(([itemKey, value]) => itemKey),
      startWith(this.getItem(key, defaultValue))
    )
  }

}
