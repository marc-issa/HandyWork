<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    function addNotification(Request $request){
        $notification = new Notification();
        $notification->user_id = $request->user_id;
        $notification->content = $request->content;
        $notification->type = $request->type;

        if($notification->save()){
            return response()->json([
                "resp"=>true
            ]);
        }else{
            return response()->json([
                "resp"=>false
            ]);
        }
    }

    function deleteNotification(Request $request){
        $notification = Notification::find($request->noti_id);
        if($notification->delete()){
            return response()->json([
                "resp"=>true
            ]);
        }else{
            return false;
        }
    }

    function getNotificationByUserId($user_id){
        $notification_empty = Notification::where("user_id", $user_id)->first();
        $notification = Notification::where("user_id", $user_id)->get();
        
        if($notification_empty!=null){
            return response()->json([
                "resp"=>$notification->sortByDesc("created_at")
            ]);
        }else{
            return response()->json([
                "resp"=>"empty"
            ]);
        }
    }
}