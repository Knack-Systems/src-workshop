import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cart, ActiveCartService, EventService, GlobalMessageService, CartAddEntrySuccessEvent, GlobalMessageType, CartAddEntryFailEvent } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { map, first } from 'rxjs/operators';

@Component({
  selector: 'app-custom-quick-order',
  templateUrl: './custom-quick-order.component.html',
  styleUrls: ['./custom-quick-order.component.scss']
})
export class CustomQuickOrderComponent implements OnInit {

  quickOrderForm: FormGroup;
  cartIsLoading$: Observable<boolean> = this.activeCartService
    .isStable()
    .pipe(map((loaded) => !loaded));
  cart$: Observable<Cart> = this.activeCartService.getActive();
  min = 1;

  public subscription: Subscription = new Subscription();
  public cartEventsSubscription: Subscription = new Subscription();

  constructor(
    private activeCartService: ActiveCartService,
    private eventService: EventService,
    private formBuilder: FormBuilder,
    private globalMessageService: GlobalMessageService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.cartEventsSubscription?.unsubscribe();
  }

  applyQuickOrder(): void {
    if (this.quickOrderForm.invalid) {
      this.quickOrderForm.markAllAsTouched();
      return;
    }

    const productCode = this.quickOrderForm.get('productCode')?.value;
    const quantity = this.quickOrderForm.get('quantity')?.value;

    this.watchAddEntrySuccessEvent();
    this.watchAddEntryFailEvent();

    if (productCode && quantity) {
      this.activeCartService.addEntry(productCode, quantity);
    }
  }

  protected buildForm(): void {
    this.quickOrderForm = this.formBuilder.group({
      productCode: [null, [Validators.required]],
      quantity: [null, [Validators.required]
      ],
    });
  }

  protected watchAddEntrySuccessEvent(): void {
    this.cartEventsSubscription.add(
      this.eventService
        .get(CartAddEntrySuccessEvent)
        .pipe(first())
        .subscribe((data: CartAddEntrySuccessEvent) => {
          let key = 'quickOrderCartForm.stockLevelReached';
          let productTranslation;
          let messageType = GlobalMessageType.MSG_TYPE_WARNING;

          if (data.quantityAdded) {
            key =
              data.quantityAdded > 1
                ? 'quickOrderCartForm.entriesWereAdded'
                : 'quickOrderCartForm.entryWasAdded';

            productTranslation =
              data.quantityAdded > 1
                ? 'quickOrderCartForm.products'
                : 'quickOrderCartForm.product';

            messageType = GlobalMessageType.MSG_TYPE_CONFIRMATION;
          }

          this.globalMessageService.add(
            {
              key,
              params: {
                product: data?.entry?.product?.name || productTranslation,
                quantity: data.quantityAdded,
              },
            },
            messageType
          );
          this.resetForm();
        })
    );
  }

  protected watchAddEntryFailEvent(): void {
    this.cartEventsSubscription.add(
      this.eventService
        .get(CartAddEntryFailEvent)
        .pipe(first())
        .subscribe(() => {
          this.globalMessageService.add(
            {
              key: 'quickOrderCartForm.noResults',
            },
            GlobalMessageType.MSG_TYPE_ERROR
          );
        })
    );
  }

  protected getValidCount(value: number) {
    if (value < this.min || !value) {
      value = this.min;
    }

    return value;
  }

  protected resetForm(): void {
    this.quickOrderForm.reset();
  }

}
