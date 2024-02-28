import { Directive, Input, TemplateRef, ViewContainerRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  
  @Input() set appUnless(condition: boolean) {
    console.log('condition:', condition);
    if(!condition){
      console.log(this.templateRef);
      console.log(this.vcRef);
      this.vcRef.createEmbeddedView(this.templateRef)
    }
    else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
