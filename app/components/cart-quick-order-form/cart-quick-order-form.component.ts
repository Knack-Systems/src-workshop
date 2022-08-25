import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActiveCartService} from '@spartacus/core';

@Component({
  selector: 'app-cart-quick-order-form',
  templateUrl: './cart-quick-order-form.component.html',
  styleUrls: ['./cart-quick-order-form.component.scss']
})
export class CartQuickOrderFormComponent implements OnInit {
  quickOrderForm!: FormGroup;

  constructor(protected formBuilder: FormBuilder, private activeCartService: ActiveCartService) {
    
   }

  ngOnInit(): void {
    
    this.quickOrderForm = this.formBuilder.group({
      productCode: ['', [Validators.required,
                        Validators.pattern("^[0-9]*$"),
                        Validators.maxLength(7),
                        Validators.minLength(7)]],
      quantity: ['1', {updateOn: 'blur', validators: [Validators.required]} ]
    });

    console.log(this.quickOrderForm.get('quantity'));
  }

  onSubmitQuickOrder(){
    const productCode = this.quickOrderForm.controls.productCode.value;
    const quantity = this.quickOrderForm.controls.quantity.value;
    console.log('this.quickOrderForm', this.quickOrderForm);
    if( this.quickOrderForm.valid) {
      this.activeCartService.addEntry(productCode, quantity);
      this.quickOrderForm.reset();
    }
    

  }

  validateProductCode() {
    console.log('changed');
  }
  


}
