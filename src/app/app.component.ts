import {Component} from '@angular/core';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  loadedFeature = 'recipes';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
