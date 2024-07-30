import { Component, Input, input, OnInit } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { UnlockCardComponent } from '../unlock-card/unlock-card.component';
import { UnlockPanelComponent } from '../unlock-panel/unlock-panel.component';
import { unlockSectionI } from './unlock-section.interface';

@Component({
  selector: 'app-unlock-section',
  standalone: true,
  imports: [SectionTitleComponent, UnlockCardComponent, UnlockPanelComponent],
  template: `
    <section class="grid gap-8">
      <app-section-title
        [title]="data.title"
        [description]="data.description"
      />
      <article class="grid gap-2 md:grid-cols-3">
        @for (item of data.unlockCards; track $index) {
        <app-unlock-card [data]="item" />
        }
        <!-- <app-unlock-panel [data]="data.panel"/> -->
        <div
          class="bg-grey-10 border border-grey-15 rounded-md p-6 grid gap-5 background-abstarct md:col-span-2"
        >
          <p class="font-bold text-xl">{{ data.panel.title }}</p>
          <button class="bg-grey-8 rounded-lg px-5 py-3 border border-grey-15">
            Learn More
          </button>
          <p class="font-medium text-sm text-grey-60">
            {{ data.panel.msg }}
          </p>
        </div>
      </article>
    </section>
  `,
})
export class UnlockSectionComponent {
  @Input() data!: unlockSectionI;
}
