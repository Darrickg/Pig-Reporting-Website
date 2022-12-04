import { Injectable, OnInit } from '@angular/core';
import {Loc} from '../Loc';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LocsService {
  private apiUrl = 'https://272.selfip.net/apps/ouUYGVAWQz/collections/locsData/documents/'

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  getLocs(): Observable<Loc[]> {
    return this.http.get<Loc[]>(this.apiUrl);
  }

  updateLocCount(loc: Loc): Observable<Loc> {
    const url = `${this.apiUrl}/${loc.key}`;
    return this.http.put<Loc>(url, loc, httpOptions);
  }

  insertLoc(loc: Loc): Observable<Loc> {
    return this.http.post<Loc>(this.apiUrl, loc);
  }
}
