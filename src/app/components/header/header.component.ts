import { Component } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedTab: any;
  constructor(private utils: UtilService){
    this.getSelectedRoute();
  }

  redirect(item: string) { 
    this.utils.redirectToPath(item);
    this.selectedTab = item;
  }

  getSelectedRoute(){
    this.utils.getRoute().subscribe((res: string) => {
      this.selectedTab = res;
    })
  }
}
