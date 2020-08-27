import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StaffData } from './staff/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private viewStaffUrl : string;
  private viewSingleStaffUrl : string;
  private removeStaffUrl : string;
  private addStaffUrl : string;
  private editStaffDetailsUrl : string;
  private addStaffSubscriptionUrl : string;

  constructor( private _http : HttpClient){ 
    this.viewStaffUrl = "./assets/staff.json";
    //this.viewStaffUrl = "./api/public/index.php/api/staff";
    this.viewSingleStaffUrl = "./api/public/index.php/api/showSingleStaff";
    this.removeStaffUrl= "./api/public/index.php/api/";
    this.addStaffUrl = "./api/public/index.php/api/addStaff";
    this.editStaffDetailsUrl = "./api/public/index.php/api/";
    this.addStaffSubscriptionUrl = "./api/public/index.php/api/addStaff";
  }

  showAllStaff(){
    return this._http.get<StaffData[]>(this.viewStaffUrl);
  }

  viewStaff(staffID){
    console.log("Displayng staff details of staff #" + staffID);
  }

  removeStaff(staffID){
    console.log("Removing staff details of staff #" + staffID);
  }

  addStaff(staffData){
    return this._http.post<any>(this.addStaffUrl, staffData);
  }

  editStaffDetails(staffID, staffData){

  }

  addStaffSubscription(staffID, subscriptionData){

  }
}
