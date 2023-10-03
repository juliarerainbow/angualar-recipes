import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSuperButton]',
  standalone: true
})
export class SuperButtonDirective {
  originalText:String="";

  @HostListener('mouseover')onMouseOver(){
    this.originalText=this.el.nativeElement.innerHTML;
    this.el.nativeElement.style.borderColor="red";
    this.el.nativeElement.innerHTML="Ricetta Selezionata";
  }
  @HostListener('mouseleave')onMouseLeave(){
    this.el.nativeElement.style.borderColor="yellow";
    this.el.nativeElement.innerHTML=this.originalText;
    
  }


  constructor(private el : ElementRef) {

    console.log('superbuttonattivato',el);
    el.nativeElement.style.borderColor='yellow';

   }

}
