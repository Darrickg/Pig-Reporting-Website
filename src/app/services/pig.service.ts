import { Injectable, OnInit } from '@angular/core';
import {Pig} from '../Pig';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

// TODO: this needs to be routed to the API, check the demo code

@Injectable({
  providedIn: 'root'
})
export class PigService implements OnInit {
  private apiUrl = 'https://272.selfip.net/apps/ouUYGVAWQz/collections/pigsData/documents/';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void { }

  
  getPigs(): Observable<Pig[]> {
    console.log("getPigs is running");
    // console.log(String(this.http.get<Pig[]>(this.apiUrl)));
    return this.http.get<Pig[]>(this.apiUrl);
  }
}
