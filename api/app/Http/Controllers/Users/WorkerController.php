<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\Categorie;
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

    function editHr(Request $request){
        $worker = Worker::where("user_id", $request->user_id);
        if($worker->update(["hourly_rate"=> $request->hr])){
            return response()->json([
                "resp" => true
            ]);
        }else{
            return response()->json([
                "resp" => false
            ]);
        }
    }

    function deleteWorker(Request $request){
        $worker = Worker::where("user_id", $request->user_id);
        $catg = Categorie::where("worker_id", $request->worker_id);
        if($worker->delete() && $catg->delete){
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