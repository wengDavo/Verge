import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-explore-section',
  standalone: true,
  imports: [SectionTitleComponent],
  template: `
    <article
      class="rounded-md border dark:border-grey-10 border-white-85 p-4 md:p-6 grid gap-8 background-abstract"
    >
      <figure class="grid gap-2">
        <div class="grid grid-cols-2 gap-1">
          <img src="/assets/images/exploreImage1.png" alt="" />
          <img src="/assets/images/exploreImage2.png" alt="" />
        </div>
        <div class="grid grid-cols-4 gap-1">
          <img
            src="/assets/images/exploreImage3.png"
            alt=""
            class="col-span-2"
          />
          <img src="/assets/images/exploreImage4.png" alt="" />
          <img src="/assets/images/exploreImage5.png" alt="" />
        </div>
      </figure>
      <div class="grid gap-2 md:grid-cols-2">
        <app-section-title [title]="title" [description]="description" />
        <figure>
          <img src="/assets/images/exploreImageSide.png" alt="" />
        </figure>
      </div>
    </article>
  `,
  styles: `
  .background-abstract{
    background-image: url("/assets/images/abstractDesignExplore.svg");
    }
  
  `,
})
export class ExploreSectionComponent {
  title: string = `Explore Verge's World`;
  description: string =
    'Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.';
}
