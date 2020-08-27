import { Component, OnInit } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { StaffService } from '../staff.service';
import { StaffData } from './staff';


const STAFF_DATA : StaffData[] = [
  {id : 0, first_name : "Uzumaki", last_name : "Naruto", other_names : "Minato", staff_id : "Jinchuruki", grade_level : 100},
  {id : 1, first_name : "Haruno", last_name : "Sakura", other_names : "Useless", staff_id : "Medic", grade_level : -20},
  {id : 2, first_name : "Sasuke", last_name : "Uchiha", other_names : "", staff_id : "Bastard", grade_level : 20}
]

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  displayedColumns: string[] = ['first_name', 'last_name', 'other_names', 'staff_id', 'grade_level', 'id'];
  dataSource : MatTableDataSource<any>;
  

  //staffList : StaffData[]; 
  staffList : StaffData[];
  constructor(private _staffService : StaffService){    
    
  }  

  ngOnInit(): void{
     this._staffService.showAllStaff().subscribe(data =>
     {
        this.dataSource = new MatTableDataSource(data);
      }
     )
     
  }

  viewStaffDetails(id):any{
    this._staffService.viewStaff(id);
  }

  removeStaff(id):any{
    this._staffService.removeStaff(id);
  }

  applyFilter(filterValue : string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
