import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
 
  constructor(private formBuilder: FormBuilder, private service: AuthService, private router:Router) {

  }

  public loginForm: FormGroup ;

  ngOnInit() {
    this.createLoginForm()
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.loginForm.valid){
     let payload = this.loginForm.value;
      this.service.login(payload).subscribe((res)=> {
        if (res.isSuccess) {
          this.router.navigate(['/selfassessment-dashboard'])
        } else {
          alert(res.successMessage)
        }
      },(err)=> {})
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}

