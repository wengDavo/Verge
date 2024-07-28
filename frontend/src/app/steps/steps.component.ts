import { Component, OnInit } from '@angular/core';
import { StepCardComponent } from '../step-card/step-card.component';
import { stepCardI } from '../step-card/step-card.interface';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [StepCardComponent],
  template: `
    <section class="grid gap-4 md:grid-cols-3">
      @for (item of stepCardData; track $index) {
      <app-step-card [data]="item" />
      }
    </section>
  `,
  styles: ``,
})
export class StepsComponent implements OnInit {
  stepCardData!: Array<stepCardI>;
  ngOnInit(): void {
    this.stepCardData = [
      {
        num: 1,
        title: 'Discover a World of Possibilities',
        description:
          ' Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,',
      },
      {
        num: 2,
        title: 'Narrowing Down Your Choices',
        description: ` Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.`,
      },
      {
        num: 3,
        title: 'Personalized Guidance',
        description:
          ' Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.This allows you to compare and revisit your favorites as you',
      },
      {
        num: 4,
        title: 'See It for Yourself',
        description:
          ` Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.`,
      },
      {
        num: 5,
        title: 'Making Informed Decisions',
        description:
          'Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.',
      },
      {
        num: 6,
        title: 'Getting the Best Deal',
        description:
          ` We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms. We want you to be fully informed.`,
      },
    ];
  }
}
