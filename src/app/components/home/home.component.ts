import { Component } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private utils: UtilService){

  }
  redirect(item: string) { 
    this.utils.redirectToPath(item);
  }
}
