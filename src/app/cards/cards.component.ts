import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
} from '@angular/core';
import { User } from '../card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent {
  @Input() users?: User;
  constructor(private element: ElementRef, private zone: NgZone) {
    console.log(this.users?.name);
  }
  clignoter(): void {
    this.element.nativeElement.firstChild.style.backgroundColor = 'red';
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = 'white';
      }, 1000);
    });
  }


}
