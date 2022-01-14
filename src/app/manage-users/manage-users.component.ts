import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { SmplcService } from "../shared/service/smplc.service";

@Component({
  selector: "app-manage-users",
  templateUrl: "./manage-users.component.html",
  styleUrls: ["./manage-users.component.scss"],
})
export class ManageUsersComponent {
  constructor(public dialog: MatDialog, private service: SmplcService) {}

  openDialog() {
    this.dialog.open(ManageUsersDialog);
  }

  ngOnInit() {
    this.getAllUser()
  }

  public userList =[]
  public item = 'y'
  assessorLoginDetails() {
    let payload = { "iCompanyId": this.service.userDetails.companyId ? 107 : 107, "userRole": this.service.userDetails.userRole ? "Admin" : "Admin", "email": "stark@yopmail.com", "iAssessorId": 0}
    this.service.assessorLoginDetails(payload).subscribe((res) => {
        console.log(res)
    }, (err) => {

    })
  }

  getAllUser() {
    let payload = {
      "request": {
        "iUserId": 0,
          "iCompanyID": 0,
            "documentId": 0,
        "token": this.service.userDetails.token
      },
      "pageSize": 0,
        "pageNumber": 0
    }
    this.service.getallUserList(payload).subscribe((res) => {
      this.userList = res.items;
    }, (err) => {

    })
  }

  deleteUser(args) {
    let payload = {
      "request": {
        "token": "string",
        "iUserId": 0,
        "iCompanyID": 0,
        "iRoleId": 0
      },
      "pageSize": 0,
      "pageNumber": 0
    }
    this.service.deleteUserbyId(payload).subscribe((res) => {
      console.log(res)
    }, (err) => {

    })
  }


  lockUser(arg) {
    let payload = {
      "request": {
        "token": "string",
        "iUserId": 0,
        "iCompanyID": 0,
        "iRoleId": 0
      },
      "pageSize": 0,
      "pageNumber": 0
    }
    this.service.lockUser(payload).subscribe((res) => {
      console.log(res)
    }, (err) => {

    })
  }


  unlockUser(arg) {
    let payload = {
      "request": {
        "token": "string",
        "iUserId": 0,
        "iCompanyID": 0,
        "iRoleId": 0
      },
      "pageSize": 0,
      "pageNumber": 0
    }
    this.service.unlockUser(payload).subscribe((res) => {
      console.log(res)
    }, (err) => {

    })
  }
  

}


@Component({
  selector: 'admin-manage-dialog',
  templateUrl: 'dialog/manage-users-dialog.component.html',
  styleUrls:['dialog/manage-users-dialog.component.scss']
})
export class ManageUsersDialog {

  createUserForm: FormGroup;
  constructor(private service: SmplcService, private formBuilder :FormBuilder) { }

  ngOnInit() {
    this.createNewForm()
  }
  get createNewUserForm() { return this.createUserForm.controls }

  createNewForm () {
    this.createUserForm = this.formBuilder.group({
      sFirstName: ['', Validators.required],
      sDateIncorporated: ['', Validators.required],
      sfeinNumber: ['', Validators.required]
    })
  }

  createUser() {
    let payload = {
      "email": this.createUserForm.controls['email'].value ,
      "password": "string",
      "confirmPassword": "string",
      "userRole": "string",
      "userTypeId": 0,
      "companyId": 0
    }
    this.service.createNewUser(payload).subscribe((res) => {
      console.log(res)
    }, (err) => {

    })
  }

  


}