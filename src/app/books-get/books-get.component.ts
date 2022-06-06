import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lms-books-get',
  templateUrl: './books-get.component.html',
  styleUrls: ['./books-get.component.css']
})
export class BooksGetComponent implements OnInit {
li:any;
  lis :any []=[];
  lis2 :any []=[];
  constructor(private http : HttpClient) { }

  ngOnInit(): void {

    
this.http.get('http://openlibrary.org/subjects/love.json?published_in=1500-1600')
    .subscribe(data  => {
      console.log(data)
      this.li=data;
     
      this.lis=this.li.works;
      
      console.log(this.li.works);
    });







  }

}
