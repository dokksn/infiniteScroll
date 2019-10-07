import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  users: Object;
  title = 'infiniteScroll';

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
        this.users = data
      }
    );
  }  

  onScroll() {
    console.log("scroll");
    this.data.getUsers().subscribe(data => {
      this.users=data;
      //Object.assign(this.users, data);
    }
  );    
  }  
}
