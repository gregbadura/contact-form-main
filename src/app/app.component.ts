import { NgClass } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'contact-form-main';
  private changeDecetorRef = inject(ChangeDetectorRef);


  fName: string = "";
  lName: string = "";
  email: string = "";
  req: undefined | "generalenq" | "supportreq" = undefined;
  message: string = "";
  agreed: boolean = false;


  fNameError: boolean = false; 
  lNameError: boolean = false;
  emailError: boolean = false;
  reqError: boolean = false;
  messageError: boolean = false;
  agreedError: boolean = false;

  validateEmail(emailInput: string) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(emailInput);
  };

  submit(){
    this.fNameError = !this.fName.length;
    this.lNameError = !this.lName.length;
    this.emailError = !this.validateEmail(this.email);
    this.messageError = this.message.length < 1;
    this.agreedError = !this.agreed;
    this.reqError = !this.req;
  };
}