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
            $job->touch();
            return response()->json([
                "resp"=>true
            ]);
        }else{
            return response()->json([
                "resp"=>false
            ]);
        }
    }

    function updateStatus(Request $request){
        $job = Job::where("id", $request->job_id);
        if($job->update(["status"=> $request->status])){
            $job->touch();
            return response()->json([
                "resp"=>true
            ]);
        }else{
            return response()->json([
                "resp"=>false
            ]);
        }
    }

    function getAllForUser(Request $request, $user_id){
        $jobs = Job::where("user_id", $user_id)->whereOr("worker_id", "user_id")->get();
        $jobs_auth = Job::where("user_id", $user_id)->whereOr("worker_id", "user_id")->first();
        if($jobs_auth!=null){
            return response()->json([
                "resp"=>$jobs
            ]);
        }else{
            return response()->json([
                "resp"=>false
            ]);
        }
    }
}