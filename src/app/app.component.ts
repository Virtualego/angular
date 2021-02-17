import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  title = 'hello';
constructor(private router: Router){

}

  ngOnInit(){

  }

  open(v){
    switch(v){
      case 'primo':{
        this.router.navigate(['/primo']);
        break;
      }

      case 'secondo':{
        this.router.navigate(['/secondo']);
        break;
      }
    }
  }

}
