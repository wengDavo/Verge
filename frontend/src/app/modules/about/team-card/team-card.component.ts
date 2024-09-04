import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { teamCardI } from './team-card.interface';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <article class='p-5 border dark:border-grey-15 bg-red-400b relative rounded-xl w-fit mt-2 border-white-85'>
      <figure class="w-[319px] h-[270px]">
        <img src={{obj.img}} alt="" />
      </figure>
      <div class="space-y-4">
        <div class="text-center">
          <p class="font-semibold">{{obj.name}}</p>
          <p class="font-medium text-sm text-grey-60">{{obj.position}}</p>
        </div>
        <div class="absolute bg-purple-60 rounded-[43px] py-2 px-4 top-[230px] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <mat-icon>flutter_dash</mat-icon>
        </div>
        <div class="py-2 px-6 leading-3 flex justify-between rounded-[100px] dark:bg-grey-10 border dark:border-grey-15 bg-white-95 border-white-90">
          <p class="self-center">Say Hello 👋</p>
          <p class="p-2 bg-purple-60 rounded-full -rotate-[40deg]">
            <mat-icon class="">send</mat-icon>
          </p>
        </div>
      </div>
    </article>
  `,
  styles: ``,
})
export class TeamCardComponent {
  @Input() obj!: teamCardI;
}
  
