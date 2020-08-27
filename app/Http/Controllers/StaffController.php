<?php

namespace App\Http\Controllers;
use App\Staff;
use Illuminate\Http\Request;

class StaffController extends Controller
{
    //
    public function index(){
        $staff = staff::all('id', 'first_name', 'last_name', 'other_names', 'staff_id', 'grade_level') ;
        return response()->json($staff);
    }

    public function displaySingleStaff(Request $request){
        $id = $request->input('id');
        $staff_details = staff::find($id);
        return response()->json($staff_details);
    }

    public function create(Request $request){
        $first_name = $request->input('first_name');
        $last_name = $request->input('last_name');
        $other_names = $request->input('other_names');
        $staff_id = $request->input('staff_id');
        $grade_level = $request->input('grade_level');

        $staff = new Staff();
        $staff->first_name = $first_name;
        $staff->last_name = $last_name;
        $staff->other_names = $other_names;
        $staff->staff_id = $staff_id;
        $staff->grade_level = $grade_level;

        $staff->save();
        return $staff;
    }
}
