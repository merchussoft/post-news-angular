import { Component, OnInit, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-invitameuncafebuttom',
  templateUrl: './invitameuncafebuttom.component.html',
  styleUrls: ['./invitameuncafebuttom.component.scss']
})
export class InvitameuncafebuttomComponent implements OnInit{

  constructor(private elRef: ElementRef) {
  }
  ngOnInit() {
    this.loadEpaycoScript();
  }


  loadEpaycoScript() {
    const buttom_script = document.createElement('script');
    buttom_script.src = 'https://checkout.epayco.co/checkout.js';
    buttom_script.setAttribute('class', 'epayco-button');
    buttom_script.setAttribute('data-epayco-amount', '5000');
    buttom_script.setAttribute('data-epayco-tax', '0.00');
    buttom_script.setAttribute('data-epayco-tax-ico', '0.00');
    buttom_script.setAttribute('data-epayco-tax-base', '5000');
    buttom_script.setAttribute('data-epayco-name', 'invitame un cafe');
    buttom_script.setAttribute('data-epayco-currency', 'cop');
    buttom_script.setAttribute('data-epayco-country', 'CO');
    buttom_script.setAttribute('data-epayco-test', 'false');
    buttom_script.setAttribute('data-epayco-external', 'false');
    buttom_script.setAttribute('data-epayco-response', '');
    buttom_script.setAttribute('data-epayco-confirmation', '');
    buttom_script.setAttribute('data-epayco-button', 'https://ginesrom.es/wp-content/uploads/2021/03/Invitame-a-un-cafe-gines-romero.png');

   const container =this.elRef.nativeElement.querySelector('#epayco-button-container');
   container.appendChild(buttom_script)
  }
}
