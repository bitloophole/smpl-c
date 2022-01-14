import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { SmplcService } from "src/app/shared/service/smplc.service";

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html",
  styleUrls: ["./my-profile.component.scss"],
})
export class MyProfileComponent {
  
  constructor(private service: SmplcService, private formBuilder :FormBuilder) {
    this.getCompanyDetails();
  }

  myProfile:FormGroup;
  companyDetails:any;

  ngOnInit() {
  }

  getCompanyDetails() {
    let payload = {
      "request": {
        "iCompanyID": this.service.userDetails.companyId
      },
      "pageSize": 0,
      "pageNumber": 0
    }
    this.service.getCompanyDetailsById(payload).subscribe((res) => {
      this.companyDetails = res.item;
      this.myProfile = this.formBuilder.group({
        sMiddleName: [this.companyDetails.sMiddleName, Validators.required],
        sLastName: [this.companyDetails.sFirstName, Validators.required],
        sFirstName: [this.companyDetails.sLastName, Validators.required],
        sTitleInCompany: [this.companyDetails.sTitleInCompany, Validators.required],
        sEmail: [{ value: this.companyDetails.sEmail, disabled: true }],
      });
    }, (err) => {

    })
  }
  get myProfileForm() { return this.myProfile.controls; }
  
  onsubmit() {
    let payload = this.myProfile.value;
    payload["iCompanyID"] = this.service.userDetails.companyId;
    // Address1: ["Please enter address 1"]
    // CityName: ["Please enter city name"]
    // ICountryId: ["Please enter country name"]
    // Phone: ["The Phone field is required."]
    // SCompanyName: ["Please enter company name"]
    // SDateIncorporated: ["Please enter date in corporated"]
    // SFEINNumber: ["Please enter fein number"]
    // ZipCode: ["Please enter zip code"]

    this.service.updateCompanyDetails(payload).subscribe((res)=> {
      console.log(res)
    }, (err)=> {

    })
  }

}

