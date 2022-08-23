import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActiveCartService, Cart, CartAddEntryFailEvent, CartAddEntrySuccessEvent, EventService, GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { map, first } from 'rxjs/operators';


@Component({
  selector: 'app-quick-order-section',
  templateUrl: './quick-order-section.component.html',
  styleUrls: ['./quick-order-section.component.scss']
})
export class QuickOrderSectionComponent implements OnInit {
  quickOrderForm: FormGroup;
  minQuantityValue = 1;

  cartIsLoading$: Observable<boolean> = this.activeCartService.isStable().pipe(map((loaded) => !loaded));
  cart$: Observable<Cart> = this.activeCartService.getActive();
  protected subscription: Subscription = new Subscription();
  protected cartEventsSubscription: Subscription = new Subscription();


  constructor(
      private formBuilder: FormBuilder,
      private activeCartService:ActiveCartService,
      protected eventService: EventService,
      private globalMessageService: GlobalMessageService
    ) { }

  ngOnInit(): void {
    this.createForm();
    this.quickOrderForm.get("quantity")?.valueChanges.subscribe(value => {
      if(value < this.minQuantityValue) {
        this.quickOrderForm.get("quantity")?.setValue(this.minQuantityValue);
      }
   });
  }

  protected createForm(): void {
    this.quickOrderForm = this.formBuilder.group({
      productCode: ['', [Validators.required , Validators.maxLength(7), Validators.minLength(7), Validators.pattern('^[0-9]*$')]],
      quantity: [
        this.minQuantityValue,
        { updateOn: 'blur', validators: [Validators.required] },
      ],
    });
  }

  onSubmit(): void {
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

  watchAddEntrySuccessEvent(): void {
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

  watchAddEntryFailEvent(): void {
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

  getValidCount(value: number) {
    if (value < this.minQuantityValue || !value) {
      value = this.minQuantityValue;
    }

    return value;
  }

  resetForm(): void {
    this.quickOrderForm.reset();
  }

}
