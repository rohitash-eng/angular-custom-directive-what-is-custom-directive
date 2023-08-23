import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-custom-directive-what-is-custom-directive';

  signupForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[ Validators.required]),
    email: new FormControl('',[ Validators.required]),
    phone: new FormControl('',[ Validators.required])
  });

  constructor() { }

  handleSignUp(): void {
    console.log(this.signupForm);
    console.log(this.signupForm.value); 

  }

}
