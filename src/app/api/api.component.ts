import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'lms-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent implements OnInit {
li:any;
  lis :any []=[];
  lis2 :any []=[];
  constructor(private http : HttpClient) { }

  ngOnInit(): void {

this.http.get('http://openlibrary.org/')
    .subscribe(data  => {
      console.log(data)
      this.li=data;
     
      this.lis=this.li.works;
      
      console.log(this.li.works);
    });




  }

}
