import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']

})
export class SecondComponentComponent {

  isVisible = false;
  buttonText='afficher text';
  movies=[
    {titre:"star wars",
    describe:"star wars descritpion",},
    {titre:"star wars22",
    describe:"star wars descritpion22",},
    {titre:"star wars333",
    describe:"star wars descritpion333",},
    {titre:"star wars4444",
    describe:"star wars descritpion4444"}
    ];

    mode:'list' | 'card'|''='';


  toggeVisibilities (){
    this.isVisible=!this.isVisible
    this.toggleButtonText()
  }
  toggleButtonText() {
    if(this.isVisible){
      return this.buttonText='cachez le text';
    }else{
      return this.buttonText='show text ';
    }
  }
}
