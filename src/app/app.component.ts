import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
   
  
  postTitle!:string;
  postDetails!:string;
  imageURL!:string;
  postURL!:string;
  addBackground!:boolean;

  postArray: Array<string> = ['post 1 ' , 'post 12 ' , 'post 3 '  , 'post 4 '  ]


  messages: string = 'Messages from de typcomponent file';
  imgUrl: string =
    'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg';
  bool: boolean = true;

  buttonClick(){
    console.log('here is the click');
  }

  onUp(){
    console.log('it is working')
  }

  downUp(username:any){
    console.log(username);
  }


}
