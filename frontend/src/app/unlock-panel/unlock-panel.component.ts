import { Component, Input } from '@angular/core';
import { unlockPanelI } from './unlock-panel.interface';

@Component({
  selector: 'app-unlock-panel',
  standalone: true,
  imports: [],
  template: `
    <div
      class="bg-grey-10 border border-grey-15 rounded-md p-6 gap-5 background-abstarct md:col-span-3"
    >
      <p class="font-bold text-xl">{{ data.title }}</p>
      <button class="bg-grey-8 rounded-lg px-5 py-3 border border-grey-15">
        Learn More
      </button>
      <p class="font-medium text-sm text-grey-60">
        {{ data.msg }}
      </p>
    </div>
  `,
  styles: `
    .background-abstarct{
      background-image: url("/assets/images/unlockAbstractDesign.svg");
      }
    
    `,
})
export class UnlockPanelComponent {
  @Input() data!: unlockPanelI;
}
