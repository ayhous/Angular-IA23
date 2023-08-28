import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  title="je suis le titre du premier composant";
  classBanane='banane';
  isRead=true;
  inputVariable="placeholder";
  nickName="";

  isReadable(){
    
    this.isRead=!this.isRead;
  }
  setNickName(input:HTMLInputElement){
    this.nickName=input.value;
    input.value='';

  }
}

