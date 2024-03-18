import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrl: './template-container.component.scss'
})
export class TemplateContainerComponent implements OnInit{

  public title!: string;

  ngOnInit(): void {
    this.title = 'Change the template title here!';
  }

}
