import { Component, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProyecto-app';
  http = inject(HttpClient);


  changeTitle(){
    this.title = 'Frida Luz';


  }

  ngOnInit(){
    this.http.get('https://api.escuelajs.co/api/v1/products')
    .subscribe((data: any)=>{

    })
  }
}
