import { Directive, ElementRef, Input, Output } from '@angular/core';

@Directive({
  selector: '[appBackgroundSexo]'
})
export class BackgroundSexoDirective {

  @Input() appBackgroundSexo: string;

  constructor(public el: ElementRef) {
    }
  
    ngOnInit(){
      if(this.appBackgroundSexo == "F")
        this.el.nativeElement.style.backgroundColor = 'pink';     
    }
   

}
