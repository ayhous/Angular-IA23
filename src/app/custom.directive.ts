import { Directive,HostListener ,ElementRef,Renderer2} from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private element: ElementRef,private renderer: Renderer2) { }

  @HostListener('mouseclick') mouseClick(){
    console.log('Hello CustomDirective Directive');
    
    this.element.nativeElement.style.backgroundColor = 'blue';
  
  } 

}
