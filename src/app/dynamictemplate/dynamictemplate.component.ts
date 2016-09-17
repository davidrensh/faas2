import { Component,Directive, ComponentMetadata, Input, ReflectiveInjector,
  ViewContainerRef, Compiler,NgModule  } from '@angular/core';
//import {Subject,Observer} from 'rxjs/Rx';
@Directive({
  selector: '[dynamicContent]',
})
export class DynamicTemplate {
  @Input('dynamicContent') private template: string;
  @Input('dynamicContentSelector') private selector: string;
  @Input('dynamicContentContext') private context: Object;

  constructor(private viewRef: ViewContainerRef, private compiler: Compiler) { }

  private _createDynamic() {
    this.context = this.context || {};

    const metadata = new ComponentMetadata({
      selector: this.selector,
      template: this.template,
    });

    const cmpClass = class _ { };
    cmpClass.prototype = this.context;
    return Component(metadata)(cmpClass);
  }

  ngOnChanges() {
    if (!this.template) return;
    this.compiler.compileComponentAsync(this._createDynamic())
      .then(factory => {
        const injector = ReflectiveInjector.fromResolvedProviders([], this.viewRef.parentInjector);
        this.viewRef.clear();
        this.viewRef.createComponent(factory, 0, injector);
      });
  }
}

