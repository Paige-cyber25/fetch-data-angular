import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = "";
  data:any;
 constructor(private http: HttpClient) {
   
 }

 getJokes() {
   const url = 'https://official-joke-api.appspot.com/random_joke'
   this.http.get(url).subscribe((res)=>{
     this.data = res
     console.log(this.data)
     
   })
 }

 ngOnInit() {
 
 }
}
