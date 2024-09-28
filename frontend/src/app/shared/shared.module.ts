import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { FaqsComponent } from './component/faqs/faqs.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeroCardsComponent } from './component/hero-cards/hero-cards.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { OverviewCardComponent } from './component/overview/overview-card/overview-card.component';
import { PaginationNavigationComponent } from './component/pagination-navigation/pagination-navigation.component';
import { SectionTitleComponent } from './component/section-title/section-title.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { UnitTitleComponent } from './component/unit-title/unit-title.component';
import { BgTitleComponent } from './component/bg-title/bg-title.component';
import { BannerComponent } from './component/banner/banner.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FaqsComponent,
    FooterComponent,
    HeroCardsComponent,
    NavbarComponent,
    OverviewCardComponent,
    PaginationNavigationComponent,
    SectionTitleComponent,
    TestimonialsComponent,
    UnitTitleComponent,
    BgTitleComponent,
    BannerComponent,
  ],
  exports: [
    FaqsComponent,
    FooterComponent,
    HeroCardsComponent,
    NavbarComponent,
    OverviewCardComponent,
    PaginationNavigationComponent,
    SectionTitleComponent,
    TestimonialsComponent,
    UnitTitleComponent,
    BgTitleComponent,
    BannerComponent,
  ],
})
export class SharedModule {}
