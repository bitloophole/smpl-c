import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import { LoginComponent } from "./auth/login/login.component";
import { CompanyProfileComponent } from "./profile/company-profile/company-profile.component";
import { LogoHeaderComponent } from "./header/logo-header/logo-header.component";
import { AssessorProfileComponent } from "./profile/assessor-profile/assessor-profile.component";
import { ForgotPasswordComponent } from "./auth/forgot-password/forgot-password.component";
import { ChangePasswordComponent } from "./auth/change-password/change-password.component";
import { MyProfileComponent } from "./profile/my-profile/my-profile.component";
import { InnerHeaderComponent } from "./header/inner-header/inner-header.component";
import { AdminDashboardComponent } from "./dashboard/admin-dashboard/admin-dashboard.component";
import { AssessorsComponent } from "./assessors/assessors.component";
import { ManageUsersComponent, ManageUsersDialog } from "./manage-users/manage-users.component";
import { SelfAssessmentDashboardComponent } from "./dashboard/self-assessment-dashboard/self-assessment-dashboard.component";
import { AssessmentComponent } from "./assessment/assessment.component";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ChartsModule } from 'ng2-charts';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SelfAssessmentDashboardDialog } from "./dashboard/self-assessment-dashboard/dialog/self-assessment-dashboard-dialog.component";


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSliderModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    NgbModule,
    MatDialogModule,
    MatIconModule,
    MatProgressBarModule,
    ChartsModule
  ],
  declarations: [
    AppComponent, 
    LoginComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    MyProfileComponent,
    LogoHeaderComponent,
    InnerHeaderComponent,
    AdminDashboardComponent,
    SelfAssessmentDashboardDialog,
    CompanyProfileComponent,
    AssessorProfileComponent,
    AssessorsComponent,
    ManageUsersComponent,
    ManageUsersDialog,
    SelfAssessmentDashboardComponent,
    LogoHeaderComponent,
    AssessmentComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
