import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges{

  @Input() appState!: string;

  @HostBinding('class') className!: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.className = `state-${this.appState.toLowerCase()}`;
  }

}
