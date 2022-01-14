import { Injectable } from '@angular/core';
import { endPoints } from 'src/app/shared/config/endpoint';
import { BehaviorSubject, Observable, empty, throwError, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmplcService {
  userDetails:any
  constructor(private http: HttpClient ) {
    this.userDetails = JSON.parse(localStorage.getItem('SMPLUser'));
  }

  getAllCompanyDetails() {
    return this.http.get(endPoints.companyAssesment)
      .pipe(map((response: any) => {
        return response;
      }));
  }

//   {
//   "email": "something@gmail1.com",
//   "password": "FAq12345678!"
// email":"stark@yopmail.com","password":"MPLDemo01!
// }

  validateUser(param) {
    return this.http.post(endPoints.validateEmail, param)
      .pipe(map((response: any) => {
        return response;
      }));
  }


  getAllAssesmentDetails(param) {
    return this.http.post(endPoints.dashboard, param)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  deleteAssesmentbyId(param) {
    return this.http.post(endPoints.deleteAssesment, param)
      .pipe(map((response: any) => {
        return response;
      }));
  }


  deleteUserbyId(param) {
    return this.http.post(endPoints.deleteUser, param)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  assesmentList(param) {
    return this.http.post(endPoints.subscription, param)
      .pipe(map((response: any) => {
        return response;
      }));
  }

    updateCompanyDetails(payload) {
      return this.http.post(endPoints.companyUpdate, payload)
        .pipe(map((response: any) => {
          return response;
        }));
  } 
    getCompanyDetailsById(payload) {
      return this.http.post(endPoints.companyById, payload)
        .pipe(map((response: any) => {
          return response;
        }));
    } 

  assessorLoginDetails(payload) {
    return this.http.post(endPoints.accessorLogin, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  changePassword(payload) {
    return this.http.post(endPoints.changePassword, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  createNewUser(payload) {
    return this.http.post(endPoints.createNew, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  getAllCountry() {
    return this.http.get(endPoints.getAllCountry)
      .pipe(map((response: any) => {
        return response;
      }));
  } 

  getallUserList(payload) {
    return this.http.post(endPoints.getAllUsers, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  }


  saveNewUser(payload) {
    return this.http.post(endPoints.saveUser, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  } 

  getSubscriptionById(payload) {
    return this.http.post(endPoints.subscriptionById, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  } 

  lockUser(payload) {
    return this.http.post(endPoints.lockUser, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  unlockUser(payload) {
    return this.http.post(endPoints.unlockUser, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  copyAssesment (payload) {
    return this.http.post(endPoints.companyAssesment, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  dashboardDownload(payload) {
    return this.http.post(endPoints.downloadDashboad, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  uploadCompanyProfile(payload) {
    return this.http.post(endPoints.uploadCompanyPhoto, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  uploadAssessorProfile(payload) {
    return this.http.post(endPoints.uploadAssessor, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  }


  lockAssesment(payload) {
    return this.http.post(endPoints.lockAssesment, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  }
}
