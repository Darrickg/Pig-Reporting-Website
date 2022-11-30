import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CMPT 272 Project';
}

/*
  TODO: list

  - make a table for the data to be shown
      - use a mat-table

  - make a sorting for the data in the table
  
  - change structure of interface of pig
      - add pig id
      - change location
          - name, long, lat (maybe make an interface for this)
      - date and time

  - make form
      - implement routing
      - implement add new location

  - add location to the map

  - add password to delete button
*/