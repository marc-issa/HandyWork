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
}