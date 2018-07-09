import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = {
    'classifications': [
      {'name1': 'text', 'name2': 'text2', 'name3': 'text2'},
      {'name1': 'text', 'name2': 'text2', 'name3': 'text2'},
      {'name1': 'text', 'name2': 'text2', 'name3': 'text2'}]
  };

}
