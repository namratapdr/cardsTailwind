import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts=[
    {
      title:'Neat Tree',
      imageUrl:'assets/tree.jpeg',
      hashtag:'tree',
      
    },
    {
      title:'Mountain',
      imageUrl:'assets/mountain.jpeg',
      hashtag:'mountain',
      
    },
    {
      title:'Biking!',
      imageUrl:'assets/biking.jpeg',
      hashtag:'biking',
    },
  
    
  ]
}
