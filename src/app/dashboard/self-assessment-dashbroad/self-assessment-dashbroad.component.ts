import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { SmplcService } from 'src/app/shared/service/smplc.service';
import { SelfAssessmentDashbroadDialog } from "./dialog/self-assessment-dashbroad-dialog.component";

@Component({
  selector: "app-self-assessment-dashbroad",
  templateUrl: "./self-assessment-dashbroad.component.html",
  styleUrls: ["./self-assessment-dashbroad.component.scss"],
})
export class SelfAssessmentDashbroadComponent {
  assesmentList: any;
  constructor(public dialog: MatDialog, private service: SmplcService, private route: Router) {}
  openDialog() {
    this.dialog.open(SelfAssessmentDashbroadDialog);
  }

  ngOnInit() {
    this.getDashboadAssesmet();
  }

  getDashboadAssesmet() {
    let payload = {
      "request": {
        "iCompanyID": this.service.userDetails.companyId  }
    }
    this.service.getAllAssesmentDetails(payload).subscribe((res)=> {
      this.assesmentList = res.items;
    }, (err)=> {

    })
  }

  onDelete(args) {
    console.log(args)
    let payload = {
      "request": {
        "iCompanyID": this.service.userDetails.companyId ,
        "iCompanyAssessmentID": args.iCompanyAssessmentID
      }
    }
    this.service.deleteAssesmentbyId(payload).subscribe((res) => {
     alert('Item got deleted sucessfully')
    }, (err) => {

    })
  }

  copyAssesment(data:any ){
    let payload = {
        "sAssessmentName": data.sAssessmentName,
        "iLevelId": data.iLevelId,
      "iCompanyAssessmentID": data.iCompanyAssessmentID,
      "iCompanyID": data.iCompanyID,
      "iAssentStatusId": data.iAssentStatusId,
      }
       this.service.copyAssesment(payload).subscribe((res) => {
         alert('Copied sucessfully')
       }, (err) => {

       })
  }

  navigate (args) {
    this.route.navigate(['assessment'])
  }

  onDownload(args) {
    console.log(args)
    let payload = {
      "request": {
        "tenantId": 0,
        "token": this.service.userDetails.token,
        "iDocId": 0,
        // "sDocName": "string",
        // "sName": "string",
        // "sFileContent": "string",
        "assessmentId": 0,
        "iUserId": 0,
        "questionId": 0,
        "docIdList": [
          0
        ]
      },
      "pageSize": 0,
      "pageNumber": 0
    }
    this.service.dashboardDownload(payload).subscribe((res) => {

    }, (err) => { })

  }



}
