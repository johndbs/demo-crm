import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from '../../../core/models/order';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from '../../../core/enums/state-order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrl: './form-order.component.scss'
})
export class FormOrderComponent implements OnInit {

  @Input() init!: Order;
  public form!: FormGroup;
  public states = Object.values(StateOrder);
  @Output() submited: EventEmitter<Order> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {  
    this.form = this.fb.group({
      dailyRateExVAT: [this.init.dailyRateExVAT],
      numberOfDays: [this.init.numberOfDays],
      vat: [this.init.vat],
      state: [this.init.state],
      serviceType: [this.init.serviceType, [Validators.required, Validators.minLength(2)]],
      client: [this.init.client, Validators.required],
      comment: [this.init.comment],
      id: [this.init.id]
    });
  }

  public onSubmit(): void {
    this.submited.emit(this.form.value);
  }

}
