import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import receipt from '@/utils/templates/customer_receipt';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  public customerForm: UntypedFormGroup;

  ngOnInit(): void {
    this.customerForm = new UntypedFormGroup({
      name: new UntypedFormControl(null, Validators.required),
      phoneNumber: new UntypedFormControl(null),
      dr_name: new UntypedFormControl(null, Validators.required),
      dept: new UntypedFormControl(null, Validators.required)
    })
  }

  onSubmit() {
    if (this.customerForm.valid) {
      console.log(this.customerForm.value)
      let printWin = window.open('', '', 'left=300,top=300 ,width=600,height=500,toolbar=0,scrollbars=0,status  =0');
      printWin.document.write(receipt(this.customerForm.value));
      printWin.document.close();
      printWin.focus();
      // printWin.print();
      // printWin.close();
    }
  }
}
