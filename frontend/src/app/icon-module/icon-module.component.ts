import { Component } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-icon-module',
  standalone: true,
  imports: [MatIconModule],
  template: ` <p>icon-module works!</p> `,
  styles: ``,
})
export class IconModuleComponent {
  constructor(
    private domSanitizar: DomSanitizer,
    public matIconRegistry: MatIconRegistry,
  ) {
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizar.bypassSecurityTrustResourceUrl('assets/icons/logo.svg')
    );
  }

  // private setPath(url: string): SafeResourceUrl {
  //   return this.domSanitizar.bypassSecurityTrustResourceUrl(url);
  // }
}
