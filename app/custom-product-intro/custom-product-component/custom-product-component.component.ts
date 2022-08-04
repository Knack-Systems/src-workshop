import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Product, TranslationService, WindowRef } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-custom-product-component',
  templateUrl: './custom-product-component.component.html',
  styleUrls: ['./custom-product-component.component.scss'],
})
export class CustomProductComponentComponent
  implements OnInit, AfterContentChecked
{
  product$: Observable<Product | any> = this.currentProductService.getProduct();
  reviewsTabAvailable = new BehaviorSubject<boolean>(false);
  constructor(
    protected currentProductService: CurrentProductService,
    private translationService: TranslationService,
    protected winRef: WindowRef
  ) {}

  ngOnInit(): void {}
  ngAfterContentChecked() {
    this.reviewsTabAvailable.next(!!this.getReviewsComponent());
  }

  showReviews() {
    // Use translated label for Reviews tab reference
    this.translationService
      .translate('TabPanelContainer.tabs.ProductReviewsTabComponent')
      .subscribe((reviewsTabLabel) => {
        const tabsComponent = this.getTabsComponent();
        const reviewsTab = this.getTabByLabel(reviewsTabLabel, tabsComponent);
        const reviewsComponent = this.getReviewsComponent();
        if (reviewsTab && reviewsComponent) {
          this.clickTabIfInactive(reviewsTab);
          setTimeout(
            () => reviewsComponent.scrollIntoView({ behavior: 'smooth' }),
            0
          );
        }
      })
      .unsubscribe();
  }

  private getReviewsComponent(): Element | any {
    return this.winRef.document.querySelector('cx-product-reviews');
  }
  private getTabsComponent(): Element | any {
    return this.winRef.document.querySelector('cx-tab-paragraph-container');
  }

  private clickTabIfInactive(tab: HTMLElement): void {
    if (
      !tab.classList.contains('active') ||
      tab.classList.contains('toggled')
    ) {
      tab.click();
    }
  }
  private getTabByLabel(
    label: string,
    tabsComponent: Element
  ): HTMLElement | any {
    if (tabsComponent) {
      // NOTE: Reads through button tags to click on correct tab
      // There may be a better way of doing this now/after refactor
      const tabElements: HTMLCollectionOf<HTMLElement> =
        tabsComponent.getElementsByTagName('button');

      // Look through button tab elements until finding tab with label
      for (const buttonElement of Array.from(tabElements)) {
        if (buttonElement.innerHTML.includes(label)) {
          return buttonElement;
        }
      }
    }
  }
}
