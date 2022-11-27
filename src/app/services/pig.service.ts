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

  /*
  ngOnInit(): void { 
    this.http.get<Object>('https://https://272.selfip.net/apps/ouUYGVAWQz/collections/pigsData/documents/')
    .subscribe((data: any)=>{
      this.pigs = data
      console.log(this.pigs)
    })
  }
  */
  
  getPigs(): Observable<Pig[]> {
    return this.http.get<Pig[]>(this.apiUrl);
  }
}
