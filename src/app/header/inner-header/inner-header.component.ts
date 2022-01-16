import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { SmplcService } from "src/app/shared/service/smplc.service";

@Component({
  selector: "app-inner-header",
  templateUrl: "./inner-header.component.html",
  styleUrls: ["./inner-header.component.scss"],
})
export class InnerHeaderComponent {

  isHidden:boolean = false;
  isHidden1: boolean = false;
  constructor(public dialog: MatDialog, public service: SmplcService) {}
  
  openInviteDialog(){
    this.dialog.open(InviteDialog);
  }

  toggle() {
    this.isHidden = !this.isHidden;
  }
  toggle1(){
    this.isHidden1 = !this.isHidden1;
  }

  logout() {
    localStorage.removeItem('SMPLUser');
  }


}


@Component({
  selector: 'invite-dialog',
  templateUrl: 'dialog/invite-dialog.component.html',
  styleUrls:['dialog/invite-dialog.component.scss']
})
export class InviteDialog {
  constructor(private service: SmplcService) { }

  ngOnInit() {
    this.getselfAssesmetList()
   }
  getselfAssesmetList() {
    let payload = {
      "request": {
        "token": this.service.userDetails.token,
      },
      "pageSize": 0,
      "pageNumber": 0
    }
    this.service.assesmentList(payload).subscribe((res) => {
     // this.listData = res.items;
    }, (err) => { })
  }


}