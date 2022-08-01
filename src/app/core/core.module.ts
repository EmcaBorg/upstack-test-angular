import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { AngularSvgIconModule, SvgIconRegistryService } from 'angular-svg-icon';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    { provide: "BASE_API_URL", useValue: environment.apiUrl }
  ]
})
export class CoreModule {

  constructor(private iconReg: SvgIconRegistryService) {
    this.iconReg.addSvg('upload',
      '<svg width="16" height="16" viewBox="0 0 16 16" enable-background="new 0 0 24 24" class="sc-gKsewC iPWGYb"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6464 3.85347L11 4.20702L11.7071 3.49992L11.3536 3.14636L8.35355 0.146362H7.64645L4.64645 3.14636L4.29289 3.49992L5 4.20702L5.35355 3.85347L7.5 1.70702V9.49992V9.99992H8.5V9.49992V1.70702L10.6464 3.85347ZM1 5.49994L1.5 4.99994H4V5.99994H2V14.9999H14V5.99994H12V4.99994H14.5L15 5.49994V15.4999L14.5 15.9999H1.5L1 15.4999V5.49994Z" fill="currentColor"></path></svg>'
    );
    this.iconReg.addSvg('bell', '<svg width="19" height="20" viewBox="0 0 19 20" enable-background="new 0 0 24 24" class="sc-gKsewC gMPWlu"><path d="M1.72149 16.0526H16.6118C17.6622 16.0526 18.3333 15.4289 18.3333 14.5127C18.3333 13.46 17.5066 12.6121 16.641 11.8519C15.931 11.2281 15.8046 9.87329 15.6101 8.42105C15.3767 5.28265 14.3068 2.97271 12.0212 2.14425C11.5933 0.916179 10.5234 0 9.1618 0C7.8099 0 6.73033 0.916179 6.31211 2.14425C4.02653 2.97271 2.95668 5.28265 2.71353 8.42105C2.52874 9.87329 2.39257 11.2281 1.68258 11.8519C0.816976 12.6121 0 13.46 0 14.5127C0 15.4289 0.671088 16.0526 1.72149 16.0526ZM9.1618 20C10.893 20 12.1477 18.7914 12.2644 17.3782H6.05924C6.17595 18.7914 7.44032 20 9.1618 20Z"></path></svg>')
  }

}
