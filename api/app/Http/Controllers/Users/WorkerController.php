<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\Categorie;
use App\Models\Worker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    function getWorkerByUsername(Request $request){
        $worker = DB::table("users")
                    ->join("workers", "user_id", "=", "users.id")
                    ->select("users.*", "workers.hourly_rate")
                    ->where("users.username", "Like","%{$request->username}%")
                    ->get();
        return response()->json([
            "resp"=>$worker
        ]);
    }
}