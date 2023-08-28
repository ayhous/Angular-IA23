import { Directive,ElementRef,HostListener } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
    
  
     this.element.nativeElement.style.backgroundColor = 'yellow';
    console.log('Hello HighlightDirective Directive');

  } 

  @HostListener('mouseover') mouseOver(){
    this.element.nativeElement.style.backgroundColor = 'blue';
  } 
  @HostListener('mouseleave') OnMouseLeave(){
    this.element.nativeElement.style.backgroundColor = 'yellow';
    
  }
  @HostListener('mouseclick') mouseClick(){
    console.log('Hello CustomDirective Directive');
    
    this.element.nativeElement.style.backgroundColor = 'blue';
}
}
