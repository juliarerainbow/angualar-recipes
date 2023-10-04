import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
  standalone: true
})
export class RepeatDirective {
  //template è quello che permette la ripetitività del codice 
  // @Input() appRepeat?: number; ====>
  @Input() set appRepeat(value : number ){
    // console.log(value);
    // this.viewContainer.createEmbeddedView(this.template)
    for(let i = 0; i < value; i++){
      this.viewContainer.createEmbeddedView(this.template)
    }
  };


  //getter e setter sono finte proprietà che si ocmportano come funzioni
  constructor(private viewContainer : ViewContainerRef,private template: TemplateRef<any>) { 
    console.log("---", viewContainer,template);

  }

}
