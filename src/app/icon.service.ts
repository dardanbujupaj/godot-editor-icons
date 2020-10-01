import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs'

import {IconMetadata} from './icon-metadata'


const ICONS_URL = 'https://api.github.com/repos/godotengine/godot/contents/editor/icons'

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(private http: HttpClient) { }

  listAll(): Observable<IconMetadata[]> {
    return this.http.get<IconMetadata[]>(ICONS_URL)
  }
}
