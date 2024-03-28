import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../../../core/models/client';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrl: './form-client.component.scss'
})
export class FormClientComponent implements OnInit{

  @Input() init!: Client;
  public form!: FormGroup;
  @Output() submited: EventEmitter<Client> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
      this.form = this.fb.group({
        name: [[this.init.name], [Validators.required]],
        email: [[this.init.email], [Validators.email]],
        phone: [this.init.phone],
        comment: [this.init.comment],
        id: [this.init.id]
      });
  }

  public onSubmit(): void {
    this.submited.emit(this.form.value);
  }

}
