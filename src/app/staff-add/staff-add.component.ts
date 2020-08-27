import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff-add',
  templateUrl: './staff-add.component.html',
  styleUrls: ['./staff-add.component.scss']
})
export class StaffAddComponent implements OnInit {

  userForm : FormGroup;
  loading = false;
  success = false;

  constructor( private fb : FormBuilder, private _staffService : StaffService){ 
   
  }

  ngOnInit(): void {
     this.userForm = this.fb.group({
       first_name : ['',[
         Validators.required
        ]
       ],
       last_name : ['',[
         Validators.required
        ]
       ],
       other_names : '',
       staff_id : ['',[
         Validators.required
        ]
       ],
       grade_level : ['',[
         Validators.required
        ]
       ],
       memberships : this.fb.array([])
     })

     //this.userForm.valueChanges.subscribe(console.log);
  }

  get memberships(){
    return this.userForm.get('memberships') as FormArray
  }

  addMembership(){
    const membership = this.fb.group({
      body : ['',
        Validators.required
      ],
      number : ['',
        Validators.required
      ],
      subscription : [],
      license : [],
      year : [],
      conference : [],
      mtp : [],
      others : []
    })
    this.memberships.push(membership);
  }

  deleteMembership(i){
    this.memberships.removeAt(i);
  }

  submitHandler(){
    const formValue = this.userForm.value;
    this._staffService.addStaff(this.userForm.value).subscribe(
      res => this.success = true,
      err => console.log(err)
    )
    //console.log(this.userForm.value)
    
  }

}
