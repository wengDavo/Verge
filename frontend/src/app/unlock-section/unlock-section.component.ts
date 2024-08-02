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
        <div
          class="bg-white-85 border-white-90 dark:bg-grey-10 border dark:border-grey-15 rounded-md p-6 grid gap-5 background-abstarct md:col-span-2 md:flex md:p-2 md:gap-2"
        >
          <p class="font-bold text-xl md:text-sm">{{ data.panel.title }}</p>
          <button
            class="dark:bg-grey-8 bg-white-90 rounded-lg px-5 py-3 border dark:border-grey-15 border-white-95 md:order-3 md:text-sm"
          >
            Learn More
          </button>
          <p class="font-medium text-sm dark:text-grey-60 text-grey-30 md:text-sm">
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
