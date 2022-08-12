import { Component, Input } from '@angular/core';
import { Cart } from '@spartacus/core';

@Component({
  selector: 'app-custom-summary',
  templateUrl: './custom-summary.component.html',
  styleUrls: ['./custom-summary.component.scss']
})
export class CustomSummaryComponent {
  @Input() cart: Cart | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
