import { Component } from '@angular/core';
import dayjs from 'dayjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  public date = dayjs().format('YYYY');

  public version: string = environment.version;

}
