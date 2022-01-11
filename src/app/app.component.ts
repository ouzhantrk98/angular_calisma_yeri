import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDo';
  user = "Birisi";
  items= [
    {
      description: "Kahvaltı",
      action: "No"
    },
    {
      description: "Yemek",
      action: "Yes"
    },
    {
      description: "Spor",
      action: "No"
    },
    {
      description: "Ders Çalış",
      action: "No"
    }];
}
