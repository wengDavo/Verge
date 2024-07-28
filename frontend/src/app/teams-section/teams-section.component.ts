import { Component, OnInit } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { AbsractDesignSparklesComponent } from '../absract-design-sparkles/absract-design-sparkles.component';
import { TeamCardComponent } from '../team-card/team-card.component';
import { teamCardI } from '../team-card/team-card.interface';

@Component({
  selector: 'app-teams-section',
  standalone: true,
  imports: [
    SectionTitleComponent,
    AbsractDesignSparklesComponent,
    TeamCardComponent,
  ],
  template: `
    <section class="grid gap-8">
      <app-absract-design-sparkles />
      <app-section-title [title]="title" [description]="description" />
      <div class="md:grid md: grid-cols-3 md:gap-2">
        @for (item of teamsData; track $index) {
        <app-team-card [obj]="item" />
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class TeamsSectionComponent implements OnInit {
  title: string = 'Meet the Estatein Team';
  description: string =
    'At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.';
  teamsData!: Array<teamCardI>;

  ngOnInit(): void {
    this.teamsData = [
      {
        img: 'assets/images/houseHandheld.png',
        name: 'Weng Davo',
        position: 'Developer',
      },
      {
        img: 'assets/images/houseHandheld.png',
        name: 'Benjamin Ola',
        position: 'Developer',
      },
    ];
  }
}
