import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Product, TranslationService, WindowRef } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-new-product-intro',
  templateUrl: './new-product-intro.component.html',
  styleUrls: ['./new-product-intro.component.scss']
})
export class NewProductIntroComponent implements OnInit,AfterContentChecked {

  reviewsTabAvailable = new BehaviorSubject<boolean>(false);

  product$: Observable<Product | any> = this.currentProductService.getProduct();

  constructor(
    protected currentProductService: CurrentProductService,
    private translationService: TranslationService,
    protected winRef: WindowRef
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterContentChecked() {
    this.reviewsTabAvailable.next(!!this.getReviewsComponent());
  }

  // Scroll to views component on page and click "Reviews" tab
  showReviews() {
    // Use translated label for Reviews tab reference
    this.translationService
      .translate('TabPanelContainer.tabs.ProductReviewsTabComponent')
      .subscribe((reviewsTabLabel :any) => {
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

  // NOTE: Does not currently exists as its own component
  // but part of tabs component. This is likely to change in refactor.
  private getReviewsComponent(): Element | any {
    return this.winRef.document.querySelector('cx-product-reviews');
  }

  // Get Tabs Component if exists on page
  private getTabsComponent(): Element | any {
    return this.winRef.document.querySelector('cx-tab-paragraph-container');
  }

  // Click to activate tab if not already active
  private clickTabIfInactive(tab: HTMLElement): void {
    if (
      !tab.classList.contains('active') ||
      tab.classList.contains('toggled')
    ) {
      tab.click();
    }
  }

  // Get Tab by label if exists on page
  private getTabByLabel(label: string, tabsComponent: Element): HTMLElement | any {
    if (tabsComponent) {
      // NOTE: Reads through button tags to click on correct tab
      // There may be a better way of doing this now/after refactor
      const tabElements: HTMLCollectionOf<HTMLElement> = tabsComponent.getElementsByTagName(
        'button'
      );

      // Look through button tab elements until finding tab with label
      for (const buttonElement of Array.from(tabElements)) {
        if (buttonElement.innerHTML.includes(label)) {
          return buttonElement;
        }
      }
    }
  }
}
