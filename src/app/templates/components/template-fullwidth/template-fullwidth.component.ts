import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-fullwidth',
  templateUrl: './template-fullwidth.component.html',
  styleUrl: './template-fullwidth.component.scss'
})
export class TemplateFullwidthComponent {

  @Input() title!: string;
  
}
