import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit()
  {
    this.form = this.fb.group({
      username: ['username', Validators.required],
      password: ['', Validators.required],
      rememberme: [true]
    })
  }

  onSubmit(formValues)
  {
    console.log(formValues)
  }

}
