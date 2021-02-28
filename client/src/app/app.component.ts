import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Compnet';
  products: any[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get("https://localhost:5001/api/Products").subscribe((res: any) => {
      this.products = res.data;
      console.log(this.products);
    }, error =>{
      console.log(error);
    });
  }
}
