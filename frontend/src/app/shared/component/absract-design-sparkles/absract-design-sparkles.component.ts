import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-absract-design-sparkles',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <figure class="flex items-center">
      <img src="/assets/icons/sparkle.png" alt="" class="h-6" />
      <img src="/assets/icons/sparkle.png" alt="" class="h-4" />
      <img src="/assets/icons/sparkle.png" alt="" class="h-2" />
    </figure>
  `,
  styles: ``,
})
export class AbsractDesignSparklesComponent {}
