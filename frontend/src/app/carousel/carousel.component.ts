// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-carousel',
//   standalone: true,
//   imports: [],
//   template: ` <section>
//     <div>
//       {{getCurrent()}}
//     </div>
    
//   </section> `,
//   styles: ``,
// })
// export class CarouselComponent {
//   @Input() slides!: Array<any>;
//   i: number = 0;

//   getCurrent = () => this.slides[this.i];
//   getPrev = () => (this.i = this.i === 0 ? 0 : this.i - 1);
//   getNext = () =>
//     (this.i = this.i === this.slides.length ? this.i : this.i + 1);
// }
