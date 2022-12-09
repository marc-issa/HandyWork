<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    function addJob(Request $request){
        $job = new Job;
        $job->title = $request->title;
        $job->description = $request->description;
        $job->categorie_id = $request->catg_id;
        $job->date_and_time = $request->dnt;
        $job->status = "pending";
        $job->user_id = $request->user_id;
        $job->worker_id = $request->worker_id;
        
        if($job->save()){
            return response()->json([
                "resp"=>$job->id
            ]);
        }else{
            return response()->json([
                "resp"=>false
            ]);
        }
    }

    function updateDateAndTime(Request $request){
        $job = Job::where("id", $request->job_id);
        if($job->update(["date_and_time"=> $request->dnt])){
            return response()->json([
                "resp"=>true
            ]);
        }else{
            return response()->json([
                "resp"=>false
            ]);
        }
    }
}