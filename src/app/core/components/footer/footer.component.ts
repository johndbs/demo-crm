import { Component } from '@angular/core';
import dayjs from 'dayjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  public date = dayjs().format('YYYY');

}
