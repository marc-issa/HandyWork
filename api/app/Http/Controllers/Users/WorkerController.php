<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\Worker;
use Illuminate\Http\Request;

class WorkerController extends Controller
{
    function addWorker(Request $request){
        $worker = new Worker();
        $worker->user_id = $request->user_id;
        $worker->hourly_rate = $request->hr;

        if($worker->save()){
            return response()->json([
                "resp" => true
            ]);
        }else{
            return response()->json([
                "resp" => false
            ]);
        }
    }
}