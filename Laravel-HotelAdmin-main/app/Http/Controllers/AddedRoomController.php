<?php

namespace App\Http\Controllers;

use App\Models\Addedroom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class AddedRoomController extends Controller
{
    public function showroom(){
        $showroom=Addedroom::all();
        return view('AdminDashboard.AdminPages.RoomDetails.roomdetails', compact('showroom'));
   }
   public function removeRoom($id){
    $showroom = Addedroom::find($id);
    $showroom->delete();
    return Redirect::to('/roomdetails');
   }
   public function addroom(Request $request)
   {
       $showsingleroom = new  Addedroom;
       $showsingleroom->typeroom= $request->typeroom;
       $showsingleroom->roomprice= $request->roomprice;
       $showsingleroom->roomsize= $request->roomsize;
       $showsingleroom->roomnumber= $request->roomnumber;
       $showsingleroom->bedtypes= $request->bedtypes;
       $showsingleroom->floornumber= $request->floornumber;
       $showsingleroom->roomcapacity= $request->roomcapacity;
       $showsingleroom->description= $request->description;
       $showsingleroom->roomphoto= $request->roomphoto;
       
       $showsingleroom->save();
       return Redirect::to('/roomdetails');
   }
}
